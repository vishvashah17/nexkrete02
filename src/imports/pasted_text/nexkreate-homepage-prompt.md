# NexKreate Homepage — Premium Editorial Agency UI/UX Implementation Prompt

## ROLE

Act as a senior UI/UX designer, creative director, motion designer and frontend engineer specializing in premium digital agencies.

Design and implement a complete, production-quality homepage for **NexKreate**, a digital agency focused on:

* Website Development
* Performance Marketing
* Conversion-focused digital experiences
* Long-term digital growth

Use **https://www.thealien.design/** as a visual and interaction reference.

IMPORTANT:

Do NOT clone The Alien Design website.

Do NOT reproduce its exact layout, copy, illustrations, colors, branding, assets or proprietary design elements.

Instead, extract its design principles:

* oversized editorial typography
* strong visual hierarchy
* generous whitespace
* asymmetric composition
* large project showcases
* playful but controlled graphic accents
* smooth scroll-based motion
* premium agency presentation
* strong CTA moments
* interactive storytelling
* minimal navigation
* sophisticated transitions

Then reinterpret those principles into a completely original **NexKreate visual identity** based on the content and requirements below.

---

# 1. BRAND POSITIONING

NexKreate should feel:

* Premium
* Modern
* Intelligent
* Creative
* Performance-oriented
* Technology-driven
* Confident
* Minimal
* Conversion-focused
* Trustworthy

The website should NOT feel like:

* a generic SaaS landing page
* a template website
* a corporate consulting website
* an overly colorful marketing website
* a dashboard
* a basic WordPress agency site

The final experience should feel like a **high-end digital studio that combines design, development and marketing performance**.

The visitor should immediately understand:

"These people can build my website AND help my business grow."

---

# 2. OVERALL DESIGN DIRECTION

Use an editorial / experimental agency aesthetic inspired by premium design studios.

Core visual principles:

1. Huge typography
2. Strong whitespace
3. Large visual compositions
4. Minimal UI chrome
5. Thin borders
6. Subtle rounded corners only where useful
7. Large image/mockup areas
8. Asymmetric layouts
9. Controlled motion
10. Micro-interactions
11. Strong contrast
12. Clear CTA hierarchy

Avoid excessive cards.

Avoid putting every section inside rounded rectangles.

Avoid excessive gradients.

Avoid excessive shadows.

Avoid excessive glassmorphism.

Avoid unnecessary decorative elements.

Every visual element should have a purpose.

---

# 3. TYPOGRAPHY SYSTEM

Use the typography system defined for NexKreate.

## Headline Font

Use:

**Seasons Regular**

Use it for:

* Hero headline
* Major section headings
* Large editorial statements
* High-impact display text

Headlines should be expressive and spacious.

Do not compensate with excessive font weight.

Use:

* size
* spacing
* line breaks
* scale
* positioning

to create hierarchy.

## Supporting Font

Use:

**Helvetica Neo Condensed Regular**

Use it for:

* Navigation
* Body text
* Subheadings
* Buttons
* Labels
* Form fields
* Supporting information
* Project metadata

Keep the regular weight as the default.

The design should feel premium through composition rather than font-weight manipulation.

---

# 4. NAVIGATION

Create a minimal, premium navigation bar.

Desktop:

LEFT:
NexKreate logo.

CENTER/RIGHT:

* Work
* Services
* Process
* Contact

RIGHT:
Primary CTA:
**Start a Project**

Navigation should remain visually lightweight.

Use generous horizontal spacing.

Do not create a heavy boxed navbar.

The navbar can initially appear transparent and become slightly more solid/subtle after scrolling.

Add smooth scroll navigation.

On mobile:

* NexKreate logo
* hamburger menu

Opening the menu should use a full-screen or large overlay navigation with smooth animation.

Menu items:

* Work
* Services
* Process
* Contact

CTA:

**Start a Project**

---

# 5. HERO SECTION

This is the most visually important section.

Create a full-screen editorial hero.

Do NOT use a conventional centered hero with a generic stock image.

Use large typography occupying most of the viewport.

Main headline:

**We Craft "Websites" "Campaigns" that build your brand.**

Implement the changing words:

* Websites
* Campaigns

The words should animate smoothly between states.

Use an editorial layout where selected words can have:

* accent background shapes
* subtle underline
* pill/highlight treatment
* slight rotation
* oversized typography
* animated marker/sticker treatment

Keep these effects controlled.

The visual result should feel inspired by an award-winning creative studio.

Supporting paragraph:

"From stunning websites to high-converting marketing campaigns, NexKreate delivers digital solutions that help businesses build credibility, increase visibility, and achieve sustainable growth."

Place this below or beside the headline depending on viewport width.

Primary CTA:

**See Our Work**

Link it to:

`#work`

The CTA should have a premium hover interaction.

Example:

Default:
See Our Work →

Hover:
arrow moves forward / button subtly expands.

---

# 6. HERO MOTION

Use subtle premium motion.

On page load:

1. Navbar fades/slides in.
2. Hero headline reveals line-by-line.
3. Dynamic words animate into position.
4. Supporting paragraph fades upward.
5. CTA enters after the headline.
6. Decorative elements have very subtle independent movement.

Do NOT make the page feel like an animation demo.

Motion must support hierarchy.

Use approximately:

* 500–800ms for major entrances
* 200–350ms for micro interactions
* smooth easing
* transform/opacity rather than expensive layout animation

Respect:

`prefers-reduced-motion`.

---

# 7. LIVE STATS STRIP

At the bottom of the hero, create a horizontal stats strip.

Use exactly:

**25+**
Projects Delivered

**20+**
Happy Clients

**24/7**
Support

The first two values should animate from 0 when the section first enters the viewport.

"24/7 Support" must NOT count upward.

It is a static badge.

Use subtle separators.

The stats should feel integrated into the hero rather than looking like three generic cards.

On mobile:

Stack or horizontally scroll them while maintaining visual rhythm.

---

# 8. SECTION: OUR WORK

ID:

`#work`

Section heading:

**Our Work**

Supporting text:

Show that NexKreate creates both digital experiences and measurable marketing outcomes.

Create two tabs:

### WEBSITE

### MARKETING

The tabs should feel editorial rather than like standard Bootstrap tabs.

Active tab should have a strong visual indicator.

---

# 9. WEBSITE PORTFOLIO

When WEBSITE is selected:

Display large project showcases.

Each project should contain:

* Project name
* Short description
* Website category
* Large laptop mockup
* Mobile phone mockup
* subtle hover movement
* external link

The website/domain link must open in a NEW TAB.

Use large visual compositions rather than small card grids.

Recommended composition:

Project 01:
Large laptop mockup

Project 02:
Large mobile + desktop composition

Project 03:
Full-width website preview

Each project should occupy significant visual space.

Use alternating alignment:

Project 01 → left aligned
Project 02 → right aligned
Project 03 → centered/full width

This creates an editorial rhythm.

---

# 10. MARKETING PORTFOLIO

When MARKETING is selected:

Replace website mockups with campaign-performance dashboards/screenshots.

Display:

* Campaign name
* Platform
* Objective
* Key result
* Dashboard screenshot
* performance metric

Possible metrics:

* ROAS
* Leads
* CTR
* CPC
* Conversion Rate
* Revenue
* Reach

Do NOT invent numerical client results.

If real data is unavailable, use placeholders clearly marked for replacement.

Marketing projects should feel analytical and performance-driven.

---

# 11. PORTFOLIO INTERACTION

Desktop:

On hover:

* image subtly scales
* project title moves a few pixels
* arrow appears
* metadata becomes slightly more prominent

Do not use aggressive zooming.

Clicking a project should open the relevant project/domain in a new tab where applicable.

Use smooth reveal animations as projects enter the viewport.

---

# 12. SECTION: TOOLS WE USE

Create a section called:

**Tools We Use**

Use two tabs:

### WEBSITE

### MARKETING

The section should not look like a boring logo wall.

Create an interactive visual ecosystem.

---

# 13. MARKETING TOOLS

Marketing tab should include:

Meta Ads Manager
Meta Ads Library
Meta Business Suite

Google Ads
Google Ads Transparency Center
Google Keyword Planner

GA4
Google Tag Manager
Looker Studio
Search Console
Microsoft Clarity

SEMrush
Figma
Canva
CapCut
Make

Present them as a dynamic typographic/tool system.

Possible interactions:

* horizontal marquee
* hover spotlight
* floating tool labels
* subtle logo/icon movement
* category grouping

Keep animation restrained.

---

# 14. WEBSITE TOOLS

For the Website tab, use a curated technology stack appropriate for modern website development.

Recommended technologies:

* React
* Next.js
* JavaScript
* TypeScript
* HTML5
* CSS3
* Tailwind CSS
* Node.js
* Flask
* REST APIs
* PostgreSQL
* Supabase
* Git
* GitHub
* Figma
* Vercel
* Webflow
* Framer

Only display technologies that NexKreate actually uses.

If a technology is not part of the real NexKreate stack, make it easy to remove from the data configuration.

Structure the tools as categories:

Frontend
Backend
Database
Design
Deployment
CMS / No-Code

---

# 15. SECTION: CLIENT ONBOARDING WORKFLOW

Create a major editorial process section.

Heading:

**How We Turn Your Idea Into Reality**

Create two tabs:

### WEBSITE

### MARKETING

Each tab uses the same six-stage interaction model but can contain service-specific descriptions.

---

# 16. INTERACTIVE VERTICAL TIMELINE

Create six steps:

01 Discovery

02 Strategy

03 Prototype

04 Review

05 Launch

06 Support

Default state:

Only display:

* step number
* title

When the user clicks a step:

Expand it smoothly.

Animation:

300ms

Animate:

* height
* opacity
* connector
* content

Only ONE step can be open at a time.

Opening another step automatically closes the previous step.

Active step should use the NexKreate accent color.

The connector line should animate toward the active step.

---

# 17. TIMELINE CONTENT

## 01 — Discovery Call

"We understand your business, goals, target audience, budget, and growth expectations through a structured consultation."

## 02 — Requirement & Strategy

"We collect content, branding assets, competitors, keywords, and campaign objectives, then create a tailored execution roadmap."

## 03 — Prototype / Initial Setup

"You receive the first website wireframe or campaign structure with creatives, audience setup, tracking plan, and performance framework."

## 04 — Review & Refinement

"We gather your feedback, refine the design, messaging, targeting, and user experience, and optimize every detail before approval."

## 05 — Approval & Launch

"After final approval, we deploy the website or launch the campaigns with analytics, conversion tracking, and quality assurance in place."

## 06 — Optimization & Support

"We monitor performance, share insights, implement improvements, and provide ongoing support to help you scale consistently."

---

# 18. MOBILE TIMELINE

On mobile:

Convert the vertical timeline into a single-open accordion.

Each item:

Number
Title
Chevron

On click:

Expand content.

Only one item may be open.

Maintain the same 300ms animation.

Ensure the interaction is touch-friendly.

---

# 19. LARGE CTA MOMENT

Before the contact form, create a strong editorial CTA section.

Use a large statement such as:

**Ready to build something that moves your business forward?**

Supporting text:

"Let's turn your idea into a high-performing digital experience."

CTA:

**Start Your Project →**

Use oversized typography.

Use generous whitespace.

Add subtle animated decorative elements.

This section should feel like a visual transition between the portfolio/process and contact area.

---

# 20. CONTACT SECTION

Section title:

**Let's Start Your Project**

The contact section should feel premium and editorial.

Do not use a tiny boxed contact form.

Use a large two-column desktop layout.

LEFT:

Large heading and supporting message.

RIGHT:

Interactive form.

---

# 21. CONTACT FORM

Required fields:

First Name

Last Name

Company / Business Name

Email Address

Phone Number

Primary Service

Options:

Website Development

Performance Marketing

---

# 22. CONDITIONAL SERVICE DROPDOWN

When:

Website Development

is selected, reveal:

New Website Development

Website Revamp & Optimization

When:

Performance Marketing

is selected, reveal:

Meta Ads (Push Marketing)

Google Ads (PPC Ads)

The secondary dropdown must remain hidden until a primary service is selected.

Animate the reveal smoothly.

---

# 23. OPTIONAL MESSAGE

Add:

Project Requirements / Message

This field is optional.

Use a large textarea.

Placeholder:

"Tell us a little about what you're looking to build..."

---

# 24. FORM CTA

Button:

**Send Project Inquiry →**

Use a strong animated hover state.

On submit:

1. Validate all required fields.
2. Validate email.
3. Validate phone.
4. Preserve browser autofill.
5. Disable the submit button during submission.
6. Show loading state.
7. Handle success.
8. Handle failure.

Success message:

**Thanks! Our team will contact you within 24 hours.**

Do not clear the form before successful submission.

---

# 25. FORM UX

Use accessible labels.

Do not rely only on placeholders.

Show inline validation errors.

Use clear focus states.

Keyboard navigation must work.

All fields should have sufficient touch targets on mobile.

The form should never visually jump when validation messages appear.

---

# 26. FOOTER

Create a minimal premium footer.

LEFT:

NexKreate logo.

Navigation:

Work
Services
Process
Contact

Services:

Website Development
Website Revamp & Optimization
Performance Marketing
Meta Ads
Google Ads

Add a map integration section.

The map should be visually integrated rather than dominating the footer.

Include contact/business information only when actual NexKreate details are provided.

Do NOT invent addresses, phone numbers or email addresses.

---

# 27. CHATBOT

Add a floating chatbot interface.

Do not make it visually intrusive.

Desktop:

Bottom-right floating circular/button launcher.

Mobile:

Bottom-right launcher with safe spacing.

When opened:

Use a compact conversational panel.

The chatbot should visually match the NexKreate design system.

Since chatbot behavior will be discussed separately, implement the UI architecture so its backend/logic can be connected later.

Do not invent chatbot responses or business logic.

---

# 28. COLOR SYSTEM

Create a restrained premium palette.

Primary:

Near-black / deep charcoal

Background:

Warm white / off-white

Text:

Near-black

Secondary:

Muted gray

Accent:

Use ONE strong NexKreate accent color.

The accent can be used for:

* active tabs
* active timeline step
* highlighted hero word
* CTA interaction
* selected states
* small decorative elements

Do not create a rainbow palette.

The website should remain mostly monochrome with controlled accent usage.

---

# 29. GRAPHIC LANGUAGE

Create an original NexKreate graphic language inspired by creative agency websites.

Use:

* small circles
* arrows
* stars
* underlines
* organic highlight shapes
* subtle geometric forms
* editorial labels
* tiny metadata
* directional indicators

Use these sparingly.

Do not copy The Alien Design's star icons, stamps, illustrations or exact shapes.

Create original NexKreate variants.

---

# 30. SCROLL EXPERIENCE

The website should feel excellent while scrolling.

Use:

* fade-up reveals
* clip-path text reveals where appropriate
* horizontal movement
* subtle parallax
* image scale transitions
* project reveal animations
* timeline activation
* number counters

Avoid:

* excessive parallax
* scroll hijacking
* excessive 3D
* animation that delays content
* effects that reduce usability

Normal browser scrolling must remain intact.

---

# 31. SECTION TRANSITIONS

Do not make every section visually isolated.

Sections should flow into each other.

Use:

* large whitespace
* typography transitions
* thin horizontal lines
* changing background tones
* overlapping project visuals
* subtle graphic elements

The overall page should feel like ONE continuous creative experience.

---

# 32. RESPONSIVE DESIGN

Desktop:

1440px optimized.

Also support:

1280px
1024px
768px
480px
390px
360px

Hero typography must scale fluidly.

Use CSS `clamp()` where appropriate.

Do not simply shrink desktop layouts.

Mobile should be intentionally redesigned.

---

# 33. MOBILE HERO

On mobile:

Use large but controlled typography.

Do not let the headline create excessive vertical scrolling.

Dynamic words should remain readable.

Stats should remain clearly visible.

CTA should have a comfortable touch target.

The navigation becomes a hamburger menu.

Project mockups should not overflow horizontally.

---

# 34. ACCESSIBILITY

Implement:

* semantic HTML
* proper heading hierarchy
* keyboard navigation
* visible focus states
* accessible form labels
* ARIA where required
* sufficient contrast
* reduced-motion support
* alt text for meaningful images
* decorative images marked appropriately

---

# 35. PERFORMANCE

The design must look premium without sacrificing performance.

Prioritize:

* lazy-loaded portfolio images
* responsive image sizes
* WebP/AVIF where possible
* optimized SVGs
* transform/opacity-based animation
* code splitting where appropriate
* minimal JavaScript for visual effects
* no unnecessary animation libraries

Avoid huge unoptimized background videos.

The homepage must load quickly.

---

# 36. COMPONENT ARCHITECTURE

Create reusable components such as:

Navbar
Hero
AnimatedHeadline
StatsCounter
PortfolioTabs
WebsiteProjects
MarketingProjects
ProjectCard
ToolsTabs
ToolCloud
ProcessTabs
ProcessTimeline
ProcessAccordion
CTASection
ContactForm
ConditionalServiceDropdown
Footer
ChatbotLauncher
ChatbotPanel

Keep content/data separated from UI components.

Project data should be stored in arrays/objects so new projects can easily be added later.

Tool data should also be configuration-driven.

---

# 37. INTERACTION PRINCIPLE

Every interaction must have a clear purpose.

Examples:

Hero:
Dynamic messaging

Projects:
Exploration

Tools:
Discovery

Timeline:
Understanding the process

Contact:
Conversion

Chatbot:
Assistance

Do not add interactions simply because they look impressive.

---

# 38. DESIGN SYSTEM

Create reusable design tokens:

--font-display
--font-body

--color-background
--color-surface
--color-text
--color-muted
--color-accent
--color-border

Spacing:

4
8
12
16
24
32
48
64
80
120
160

Use consistent spacing throughout.

---

# 39. VISUAL HIERARCHY

The visual hierarchy should approximately be:

1. Hero headline
2. Hero CTA
3. Hero stats
4. Portfolio
5. Process
6. Tools
7. Contact CTA
8. Contact form
9. Footer

The user should always know what to look at next.

---

# 40. IMPORTANT CONTENT RULES

Use the NexKreate content supplied in the project brief.

Do not invent:

* client names
* project results
* addresses
* phone numbers
* testimonials
* revenue
* conversion statistics
* company claims

Where real content/assets are unavailable, use clearly identifiable placeholders.

---

# 41. FINAL DESIGN GOAL

The final website should feel like:

"An award-winning creative digital agency meets a performance-driven technology studio."

It should combine:

The editorial confidence of premium design studios

*

The clarity of a professional development agency

*

The credibility of a performance marketing company

*

The usability of a modern conversion-focused website.

The result must be visually memorable within the first 5 seconds.

It should communicate:

**NexKreate doesn't just make websites. NexKreate creates digital experiences and campaigns designed to build brands and drive growth.**

---

# 42. FINAL QUALITY CHECK

Before considering the homepage complete, verify:

[ ] Hero is visually dominant

[ ] Dynamic Websites/Campaigns animation works

[ ] See Our Work scrolls to #work

[ ] Stats animate only when entering viewport

[ ] 24/7 remains static

[ ] Website/Marketing portfolio tabs work

[ ] Website project links open in new tabs

[ ] Marketing dashboard presentation works

[ ] Tools tabs work

[ ] Website technology list is configurable

[ ] Timeline has exactly six stages

[ ] Only one timeline item can be open

[ ] Timeline animation is approximately 300ms

[ ] Mobile timeline becomes accordion

[ ] Contact service dropdown works

[ ] Conditional secondary dropdown works

[ ] Email validation works

[ ] Phone validation works

[ ] Browser autofill works

[ ] Submit loading state works

[ ] Success message appears correctly

[ ] Footer contains navigation and services

[ ] Map integration area exists

[ ] Chatbot launcher exists

[ ] Responsive design works from 360px to 1440px+

[ ] Keyboard navigation works

[ ] Reduced-motion support works

[ ] Images are optimized

[ ] No horizontal overflow

[ ] No excessive animation

[ ] No copied Alien Design assets

[ ] No fabricated NexKreate information

[ ] Typography follows Seasons Regular + Helvetica Neo Condensed Regular

[ ] Overall visual language feels premium, editorial and original

DO NOT produce a generic agency template.

DO NOT make every section a card.

DO NOT copy The Alien Design website.

Create an original NexKreate experience using the same level of visual confidence, whitespace, editorial typography, interaction quality and storytelling.
