---
priority: "1"
title: "Clean 'Em Web Application"
subtitle: "Web Application"
description: "Web platform for accessible, automated and affordable service bookings."
image: /solo_1.png
mobile: false
---

![Clean 'Em Web Application](/solo_1.png)

> Web platform for accessible, automated and affordable service bookings.

---

# Context

I started working on Clean 'Em mainly on platform maintenance for the first version, which was made on PHP. As Clean 'Em grew, and they began acquiring a new client base made of commercial partners, the platform needed to change. Commercial clients have different needs than residential clients, and I was tasked to solve such problems. My team began by first addressing the user's needs. What they needed would ultimately guide us on what we had to build, moreover we had to stick with the mantra of Clean 'Em which is for service bookings to be accessible, automated and affordable.

**How might we:**

-   Bridge the gap and create a new platform to accommodate for both commercial and residential users.
-   Make it easy for users to automate their bookings.
-   Ease the creation of bookings with multiple properties.
-   Let the users specify crucial instructions and tailor for their individual needs.
-   Ease the translation from a work order number to a certain booking.

---

# Implementation

**Tools used:**

-   [Heroku](https://www.python.org), with [Flask](https://flask.palletsprojects.com/) as web framework.
-   [Digital Ocean Spaces](https://www.digitalocean.com/products/spaces/), with AWS [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) for file storage (Similar to AWS [S3](https://aws.amazon.com/s3/), but keeping all data under Digital Ocean where other critical servers are being run).
-   [MySQL](https://www.mysql.com/) as database, with [MySQL Connector](https://dev.mysql.com/doc/connector-python/en/) as driver.
-   [Digital Ocean Managed Database](https://www.digitalocean.com/products/managed-databases/), where MySQL is being run. This comes handy as Digital Ocean administers the database for us, leaving DevOps out of the equation.
        -   [Dependabot](https://dependabot.com/), to keep dependencies up-to-date.
-   [Radar](https://radar.io/), to get location from the assigned Pro while on a job.
Fdfdfdfdfdfdfdfdffdfdfdfdfdfdfdfdfdfddfffffffffffff-   [Stripe](https://stripe.com/), for payment processing.
-   [JWT](https://jwt.io/) (JSON Web Tokens), to create user's sessions on the API.
-   [Circle CI](https://circleci.com/), for automated tests. We strive for every component to be tested to achieve 100%  coverage](https://coverage.readthedocs.io/en/coverage-5.2/#).
