#!/usr/bin/env python3

import aws_cdk as cdk

from infrastructure.infrastructure_stack import InfrastructureStack


app = cdk.App()
InfrastructureStack(
    app,
    "FOSS4G2023Stack",
    env=cdk.Environment(account="760327784017", region="ap-southeast-2"),
)

app.synth()
