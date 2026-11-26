# Lecture Desk website

The [Lecture Desk website](https://lecturedesk.github.io/) links Windows users to the Microsoft Store and accepts email signups for the Mac launch through Google Forms.

- index.html, styles.css, and site.js are plain HTML, CSS, and JavaScript with no build step.
- privacy.html is generated from the app privacy notice with node build-privacy.cjs <PRIVACY.md>. The generator adds the website notice about launch emails.
- After changing styles.css or site.js, bump the query version on their links in index.html. Set ASSET_VERSION when rebuilding privacy.html.
- media/lecture-desk-full-tour-075.mp4 is the 94-second launch tour remastered with the Store 0.7.5 UI. media/source-inspector-075.mp4 is the source citations spotlight (S04). Each has a matching JPG poster.
- Mac signup responses are private to the form owner and available in the Responses tab of Google Forms.
