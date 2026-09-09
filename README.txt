★ MHN Decision Trace Prototype
MPIM 6740 AI Application Integration · Module 3

WHAT IT IS
A student-created, clickable pre-deployment audit artifact using only simulated request data.
It turns the Module 3 readiness findings into an interactive decision trace and includes an
embedded "Label Collision" diagnostic.

HOW TO OPEN
1. Unzip the folder.
2. Double-click index.html.
3. Use the five navigation buttons across the top.
4. On Decision Integrity, click "View Label Collision."
5. On Deployment Gate, toggle "Simulate remediation" to show the hypothetical future state.

HOW TO DEPLOY
This is a static site. You can upload the folder to GitHub Pages, Vercel, Netlify, or another static host.
No backend or database is required.

EXACT STARRED PARAGRAPH FOR YOUR PAPER
★ Applied artifact. I built an MHN Decision Trace prototype to test whether one simulated prior
authorization decision could be reconstructed from source data through audit review. The prototype
requires a traceable source record, payor-policy provenance, a consistent decision label, vendor
processing authority, an AI inference log, and the required retention period. I embedded a Label
Collision diagnostic because MHN's historical meaning of “Escalate” differs across facilities. If one
of these checks fails, the prototype holds the decision at the readiness gate rather than treating a
complete-looking record as deployment-ready.

SUGGESTED FIGURE CAPTION
Figure 1. ★ MHN Decision Trace prototype. A simulated prior authorization request is followed
through source provenance, label consistency, compliance, and audit controls. The built-in Label
Collision diagnostic demonstrates how the same simulated evidence can inherit different historical
labels when hospital definitions are inconsistent.

COURSE-FACT BASIS
- MHN Module 3 Data Readiness Audit Worksheet
- MHN Master Reference
- Module 1 Vendor Packet / RFP
- Huyen (2025), Chapter 8 Dataset Engineering
- Kershner Module 3 expert commentary

IMPORTANT
The prototype is a simulation and contains no real patient information.
