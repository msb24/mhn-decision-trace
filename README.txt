# MHN Decision Trace

**Healthcare AI decision provenance and pre-deployment control prototype**

[Explore the live demonstration](https://mhn-decision-trace.vercel.app/)

## Problem addressed

For a simulated prior-authorization decision to be auditable, the organization needs more than a plausible model output. It must be able to reconstruct the source information, applicable policy, decision label, responsible owners, model-processing authority, and review trail.

## My applied artifact

Built an interactive, student-created demonstration with sections for request data, evidence provenance, decision integrity, governance, and the deployment gate. The scenario deliberately surfaces failure modes that could be hidden by an aggregate readiness score.

### Controls demonstrated

- Clinical-source traceability through a simulated Epic/FHIR workflow.
- Payer-policy provenance, retrieval date, versioning, and transformation history.
- Label collision when two facilities interpret the same simulated evidence differently.
- Vendor processing authority and AI-specific contractual coverage.
- Audit event completeness and a seven-year retention requirement specified by the course scenario.
- Governance ownership and required clinical-to-administrative network review.

## How to use the prototype

1. Open the live demo.
2. Review the simulated request snapshot.
3. Open Source Trace to inspect provenance and missing ownership.
4. Select Decision Integrity and trigger the Label Collision diagnostic.
5. Review Governance, then inspect the remediation simulation in Deployment Gate.

## Why I designed it this way

The interface converts a checklist into a decision trace. A reviewer can see what evidence is missing, what action is required, and why the simulated system should remain on hold.

## Technology and boundaries

Static HTML/CSS/JavaScript prototype deployed on Vercel. It demonstrates requirements and decision logic but does not connect to Epic, a payer API, an AI inference service, or a production audit database. No real patient data is used.

**Designed by Maya Kalantari | Georgetown University**
