#!/usr/bin/env bash

{
    yarn build
} && {
    aws s3 rm s3://zigzag-user-picks --recursive --profile myp
    aws s3 sync build s3://zigzag-user-picks --profile myp
}
