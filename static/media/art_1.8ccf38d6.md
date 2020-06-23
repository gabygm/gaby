---
title: Terraform up & running
created: '2020-06-14T21:41:14.488Z'
modified: '2020-06-16T00:54:32.311Z'
---

# Terraform up & running
Before DevOps movement, network configuration was created and managed by hand, thanks to the DevOps, now  exists a better way to do things with terraform.

Terraform created by HashiCorp, allows to define infrastructure as code and deploy and manage the instructure using a variety of public cloud providers(AWS, Azure, GCP)

Example Server on Amazon Web Services:

``` provider "aws" { ```
``` region: "us-east-2" ```  
``` } ```
``` resource "aws_instance" "name_instance" {```
``` ami =  "ami-40d28157" ``` 
``` instance_type = "t2.micro" ```
``` } ``` 

To deploy

``` terraform appy ```

Software is not done until you deliver it to the user.
**The Rise of DevOps**
Companies had to manage a lot of hardware, typically They had one team called Operations("Ops"), dedicated to manage hw, and a separate tema called Developers("Devs"), dedicated to writing the sw.
This works well for a while, but as the company grows, problems arise, since releases are done manually, as the number os servers increases, releases become slow and painful. The Ops team occasionally makes mistakes, servers have a subtly different configuration from all the others. Developers shrug and say "It works on my machine"

Nowadays, Instead of managing their own data centers, many companies are moving to the cloud, taking advantage of services such as AWS, Azure, and GCP. 
There are four core values in the DevOps movement: Culture, Automation, Measurement, and Sharing (CAMS). The main goal is to automate as much of the software delivery process as possible, a key insight of DevOps is that you can manage almost everything in code, including servers, DBs, networks, log files, application configuration, documentation, automated test, deployment processes and so on.
## Infraestructure as Code
When you infrastructure is defined as code, you are able to use a wide variety of software engineering practices to dramatically improve your software delivery process, including:
- Self-services
- Speed and safety
- Documentation
- Version control
- Validation
- Reuse

# How Terraform Works
Written in the Golang programming language. The Go code compiles down into a single binary called **terraform**, under the hood, the terraform binary makes API calls on your behalf to one or more providers.
Terraform is a binary that translates the contents of your configurations into API calls to cloud providers
![Terraform cloud providers](https://miro.medium.com/max/332/1*DO9YtvSEfmBb8YHeJ0QW2w.png)

SOURCES:
https://www.oreilly.com/library/view/terraform-up/9781492046899/



