---
layout: case-study.njk
title: Giving Users Control Over Sensitive Healthcare Data
client: US Government
role: Product Design / UX Lead
year: "2016-2018"
team: Product Design/UX Lead (Me) + Platform Engineering Team
outcome: 100% mandated adoption of new privacy controls
summary: I was the Product Design/UX Lead on a team building an API platform for a large US Government Agency. The platform was designed to empower people to take ownership of their data and share it with third-party applications of their choosing. This project involved vetting and partnering with dozens of third-party organizations, building out the API public-facing documentation (developer experience) and safeguarding the transmission of sensitive data.
heroImage: "/images/privacy/privacy-ui.gif"
toc:
  - id: problem
    label: The Problem
  - id: approach
    label: Approach
  - id: prototype
    label: Prototype Iteration
  - id: outcomes
    label: Outcomes
---

<h2 id="problem">The Problem</h2>

<ul class="feature-list">
  <li>Users are required to give consent to share their protected data (PII/PHI) with third-parties.</li>
  <li>Based on call center data and analytics, we knew some users seemed confused about the mechanics of using their agency credentials to authorize data on a separate third-party application.</li>
  <li>We suspected there was also a deeper issue - a lack of nuanced knowledge and understanding about the mechanics and implications of sharing sensitive data.</li>
  <li>How might we try to improve people’s ability to share their healthcare information while also ensuring they understand what data they are sharing, and the risks involved?</li>
</ul>

<p>
  The existing site (shown here) lacked responsive or mobile-first design. Additional, components like the image slider lacked visible controls and the various colors throughout the site were confusing and illogical due to their haphazard use.
</p>

<p>
  Lastly, as you can see in the screenshot, there were two levels of horizontal navigation, which confused users, especially as they navigated deeper into departmental sites. We knew that we would need to completely rethink the navigation paradigm.
</p>

<h2 id="approach">Approach</h2>

<h3>Start with Research</h3>

<ul class="feature-list">
  <li>Presented to stakeholders, got approval for inter-agency research, and developed the research plan and conversation guides</li>
  <li>To overcome outreach restrictions, partnered with a research department at another government agency to ensure a higher fidelity of participant recruitment demographics.</li>
  <li>Conducted ~15 moderated usability testing sessions with users, watching them walk through the authorization process</li>
</ul>

<p>
    The authorization screen (shown here) used in testing revealed multiple design improvements that needed to be made. Despite this simple, one-screen UI - the implications of getting this content wrong could risk users facing unintended consequences sharing extremely personal and private medical information.
</p>

<h3>Research Results</h3>

<p>
    The research made it clear that our hypothesis was correct - users really struggled to understand the concepts around data sharing. They would need a user interface that allowed them to give them more choice and nuance, instead of a warning and an "all or nothing" binary selection.
</p>

<h2 id="prototype">Prototype Iteration</h2>

<ul class="feature-list">
    <li>First, we iterated on the designs to attempt to make the <strong>data sharing nuance more clear</strong> (and also to make the authentication page mobile-friendly)</li>
    <li>Next, we redesigned the authentication page to match the agency's branding and design system to reduce user’s confusion after credentialing</li>
    <li>Finally, we introduced “scopes” on the backend so that we could build a front-end that allowed for more granularity of data sharing</li>
    <li>For testing, we leveraged our third-party application partners to test with their users for each of the use cases and report back findings.</li>
</ul>

<h2 id="outcomes">Outcomes</h2>

<ul class="feature-list">
  <li>We saw immediate user adoption of the scopes feature, and kicked-off development of even more granular scopes, based on use case (i.e. if a third-party only needs medication information, they should be unable to even request additional data).</li>
  <li>We created contextual reminder emails for users to remind users what apps had access to their data and how to revoke it.</li>
  <li>We introduced requirements for third-parties to give clear instructions of the revocation of data to users.</li>
  <li>We even created an automated enforcement tool to detect changes to third-party privacy policies and terms-of-service documents that would trigger notification for users.</li>
</ul>
