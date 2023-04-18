from aws_cdk import (
    Stack,
    aws_ec2 as ec2,
    aws_ecs as ecs,
    aws_route53 as route53,
    aws_ecs_patterns as ecs_patterns,
    aws_elasticloadbalancingv2 as elbv2,
)

from constructs import Construct


class InfrastructureStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc = ec2.Vpc(self, "foss4g-2023-VPC")  # default is all AZs in region

        cluster = ecs.Cluster(self, "foss4g-2023-Cluster", vpc=vpc)

        zone = route53.HostedZone.from_lookup(
            self, "foss4g-oceania-zone", domain_name="foss4g-oceania.org"
        )

        ecs_patterns.ApplicationLoadBalancedFargateService(
            self,
            "foss4g-2023-Service",
            cluster=cluster,
            cpu=512,
            desired_count=1,
            task_image_options=ecs_patterns.ApplicationLoadBalancedTaskImageOptions(
                image=ecs.ContainerImage.from_registry("amazon/amazon-ecs-sample")
            ),
            memory_limit_mib=1024,
            public_load_balancer=True,
            domain_name="2023.foss4g-oceania.org",
            domain_zone=zone,
            redirect_http=True,
            protocol=elbv2.ApplicationProtocol.HTTPS
        )

        # TODO: Set up a DB, probably a bucket for media/assets too
