# Create4Me — site update (contact, services, portfolio)

Drop this folder's contents into the root of `Create4UEnt/sharla-portfolio` on the
`main` branch. Nothing needs building; GitHub Pages serves it as-is.

## What is in here

```
index.html            home
work.html             portfolio index  (was portfolio.html)
work/                 three case-study pages, new
  bailey-law-firm.html
  crown-and-ash.html
  what-was-she-thinking.html
services.html         services + pricing
celebrations.html     private events
contact.html          contact + brief form
available.html        remote production support
components.html       style guide (noindex — keep or delete)
assets/c4m.css        the shared stylesheet these pages expect
assets/nav.js         mobile nav, form handling, ?type= preselect
assets/*.jpg   png    photography used by the pages
```

## How to upload (no git needed)

1. github.com/Create4UEnt/sharla-portfolio → **Add file → Upload files**
2. Drag in `index.html`, `work.html`, `services.html`, `contact.html`,
   `celebrations.html`, `available.html`, `components.html`, `UPLOAD-NOTES.md`
3. Drag in the `assets` and `work` folders (drag the folders themselves — the
   browser keeps their contents)
4. Commit to `main`. Pages redeploys in about a minute.

Before you overwrite anything, make a branch: **Branch: main → "New branch" →
name it `redesign`**, commit there, and look at
`https://Create4UEnt.github.io/sharla-portfolio/` from that branch's preview
before merging into `main`.

## Two things still open

- **Booking link.** In `contact.html`, search for `BOOKING LINK`. The button
  currently opens an email with the subject "Book a 20-minute call". Paste your
  Calendly / Cal.com URL into that `href` and it becomes a real scheduler.
- **Form endpoint.** The brief form has no server: it opens the visitor's email
  app with the fields filled in and sends to sharla@create4me.co. That works on
  GitHub Pages with nothing to configure. If you would rather it post silently,
  create a free form endpoint (Formspree, Basin) and set it as the form `action`.

## Contact details used

Email `sharla@create4me.co`, phone `803 · 602 · 4574`, Columbia SC. The repo
README lists `sharlabrown050@gmail.com` / `803.413.6433` instead — change one or
the other so the site and the README agree.

## Old files

`portfolio.html` (the 3.4 MB single-file portfolio) is no longer linked from the
new navigation. Delete it once the new `work.html` is live, or keep it at
`portfolio.html` as an archive.
