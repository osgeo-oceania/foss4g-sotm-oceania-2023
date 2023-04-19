from aws_cdk import (
    Stack,
    aws_ec2 as ec2,
    aws_ecs as ecs,
    aws_route53 as route53,
    aws_ecs_patterns as ecs_patterns,
    aws_elasticloadbalancingv2 as elbv2,
    aws_rds as rds,
    aws_s3 as s3,
    aws_ecr as ecr,
    aws_secretsmanager as secretsmanager
)

from constructs import Construct


class InfrastructureStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc = ec2.Vpc(self, "foss4g-2023-VPC", nat_gateways=1, max_azs=2)

        cluster = ecs.Cluster(self, "foss4g-2023-Cluster", vpc=vpc)

        zone = route53.HostedZone.from_lookup(
            self, "foss4g-oceania-zone", domain_name="foss4g-oceania.org"
        )

        db_secret = rds.DatabaseSecret(
            self,
            "password",
            username="foss4g",
        )

        image_repo = ecr.Repository(
            self,
            "foss4g-2023-Repo",
            repository_name="foss4g-sotm-oceania-2023"
        )

        ecs_patterns.ApplicationLoadBalancedFargateService(
            self,
            "foss4g-2023-Service",
            cluster=cluster,
            cpu=512,
            desired_count=1,
            task_image_options=ecs_patterns.ApplicationLoadBalancedTaskImageOptions(
                image=ecs.ContainerImage.from_ecr_repository(image_repo, "latest"),
                secrets={
                    "DB_HOSTNAME": ecs.Secret.from_secrets_manager(db_secret, "host"),
                    "DB_USERNAME": ecs.Secret.from_secrets_manager(db_secret, "username")
                },
                container_port=80
            ),
            memory_limit_mib=1024,
            public_load_balancer=True,
            domain_name="2023.foss4g-oceania.org",
            domain_zone=zone,
            redirect_http=True,
            protocol=elbv2.ApplicationProtocol.HTTPS
        )

        rds.DatabaseInstance(
            self,
            "foss4g-2023-db",
            instance_type=ec2.InstanceType("t4g.micro"),
            database_name="foss4g",
            engine=rds.DatabaseInstanceEngine.POSTGRES,
            credentials=rds.Credentials.from_secret(db_secret),
            vpc=vpc,
        )

        # Bucket
        s3.Bucket(
            self,
            "foss4g-2023-public",
            bucket_name="foss4g-2023-public",
            public_read_access=True,
            access_control=s3.BucketAccessControl.PUBLIC_READ,
        )
