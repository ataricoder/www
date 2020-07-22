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
I started working on Clean 'Em mainly on platform maintenance for the first version, which was  made on PHP. As Clean 'Em grew, and they began acquiring a new client base made of commercial partners, the platform needed to change. The commercial clients have different needs than residential clients, and I was tasked to solve such problems. My team began by first addressing the user's needs. What they needed would ultimately guide us on what we had to build, moreover we had to stick with the mantra of Clean 'Em which is for service bookings to be accessible, automated and affordable.

**How might we:**
- Bridge the gap and create a new platform to accommodate for both commercial and residential users.
- Make it easy for the users to automate their bookings.
- Ease the creation of bookings with multiple properties.
- Let the users specify crucial instructions and tailor for their individual needs.
- Ease the translation from a work order number to a certain booking.

---
# Implementation
**Tools used:**
- Python, with Flask as web framework.
- Digital Ocean Spaces, with AWS Boto3 for file storage (Similar to AWS S3, but keeping all data under Digital Ocean where other critical servers are being run).
- MySQL as database, with MySQL Python Connector as driver.
- Digital Ocean Database, where MySQL is being run.
- Heroku for preview deployments, and Heroku CI to test preview applications.
- Dependabot, to keep dependencies up-to-date.
- Radar.io, to get location from the Pro while on a job.
- Google Maps API, to create maps using Radar.io's returned information.
- Stripe, for payment processing.
- JWT (JSON Web Tokens), to create user's sessions on the API.
- Circle CI, for automated tests. We strive for every component to be tested to achieve 100% coverage.

