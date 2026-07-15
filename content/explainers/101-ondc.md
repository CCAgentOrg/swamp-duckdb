---
title: "ONDC 101: Open Network for Digital Commerce — The UPI of E-Commerce"
date: 2026-07-15T09:05:00+05:30
author: "CashlessConsumer"
tags: ["fintech", "DPI", "ONDC", "e-commerce", "digital-public-infrastructure", "consumer-rights", "explainer"]
category: ["DPI Watch", "Explainers"]
series: ["CashlessConsumer 101"]
description: "Everything you need to know about ONDC — India's government-backed open e-commerce network. How it works, key statistics, consumer rights, privacy risks, and grievance redressal."
draft: false
---

## What is ONDC?

The **Open Network for Digital Commerce (ONDC)** is a government-backed initiative to create an open, interoperable network for digital commerce in India. Conceptualized under the **Department for Promotion of Industry and Internal Trade (DPIIT)**, Ministry of Commerce and Industry, ONDC is designed to be to e-commerce what **UPI is to digital payments** — a shared, protocol-based infrastructure that no single private entity controls. [^1]

ONDC was incorporated as a **non-profit Section 8 company** on 31 December 2021, incubated at the **Quality Council of India (QCI)** with Protean eGov Technologies Limited (formerly NSDL e-Governance) as co-founder. It operates as a private-sector-led, government-orchestrated entity — a model distinct from traditional public sector undertakings. [^2]

The core idea is **unbundling**: instead of a single platform (like Amazon or Flipkart) controlling discovery, ordering, payments, and logistics, ONDC separates these functions so that any buyer app can connect to any seller app through open protocols. A kirana store listing once on a seller app becomes discoverable across all connected buyer apps — Paytm, PhonePe's Pincode, magicpin, Ola, Tata Neu, and dozens more. [^3]

## How it Works

ONDC operates on the **Beckn Protocol** — a free and open-source protocol designed for open, decentralized, and interoperable networks. [^4] The architecture has four key layers:

1. **Registry**: A central registry where all network participants (buyer apps, seller apps, gateways) are registered with unique identifiers.
2. **Gateway**: Routes search requests from buyer apps to all relevant seller apps based on criteria like location, availability, and preferences — acting as a multicast discovery engine.
3. **Buyer Apps (BAP)**: Consumer-facing applications where buyers browse, search, and place orders. Examples: Paytm, PhonePe Pincode, magicpin, Ola, Tata Neu, Mystore, nStore.
4. **Seller Apps (SNP)**: Applications where sellers list their catalogs, manage inventory, and fulfil orders. Examples:Seller apps like eSamudaay, Growth Falcons, Bizom, and platform-specific integrations.

**Transaction flow**:
- A buyer searches for a product on their preferred buyer app
- The buyer app sends the search request via the ONDC gateway
- The gateway broadcasts it to all registered seller apps matching the criteria
- Seller apps respond with availability and pricing
- The buyer selects, pays, and the order is confirmed through the network
- Logistics providers (also on the network) handle delivery
- Each participant pays a small network fee (~1–3%) compared to the 15–30% commissions on traditional platforms [^5]

## Key Statistics

| Metric | Value | Source |
|--------|-------|--------|
| Cumulative transactions | 200+ million (as of March 2025) | [^6] |
| Monthly peak orders | 12 million (July 2024) | [^7] |
| Peak daily orders | 430,000+ (July 2024) | [^7] |
| Sellers & service providers | 7.6+ lakh (March 2025) | [^6] |
| SKUs listed | 3.4+ crore (peak) | [^8] |
| Delivery cities | 1,200+ | [^8] |
| Network participants (live) | 97+ (Q1 FY2025) | [^8] |
| Product categories enabled | 13+ | [^8] |
| Open Data dashboard | Available at opendata.ondc.org | [^9] |
| Target by 2030 | 900M buyers, 1.2M sellers | [^10] |

**Growth trajectory**: ONDC took 20 months (January 2023 to August 2024) to reach its first 100 million transactions, and added the next 100 million in roughly 7 months — indicating accelerating adoption, though driven partly by financial incentives that have since been reduced. [^6]

**Caution on statistics**: Monthly retail (non-mobility) orders peaked at 6.5 million in October 2024 but declined to 4.6 million by February 2025 as ONDC reduced financial incentives to sellers and customers (from ₹3 crore/month to ~₹30 lakh/month). This highlights that growth is partly subsidy-dependent. [^11]

## Types / Categories

ONDC is organized into **domain-specific verticals**, each with its own network participants: [^8]

| Domain | Description | Notable Participants |
|--------|-------------|---------------------|
| **Food & Beverage** | Restaurant food delivery | Paytm, magicpin, Ola |
| **Grocery** | Daily essentials, FMCG | Pincode, Paytm, eSamudaay |
| **Mobility** | Ride-hailing, auto-rickshaws | Namma Yatri, Ola, Rapido |
| **Logistics** | Last-mile delivery services | Delhivery, LoadShare, Ekart |
| **Fashion & Footwear** | Apparel, accessories | Meesho, Craftsvilla |
| **Electronics** | Consumer electronics | Various seller apps |
| **Health & Wellness** | Pharmacy, health products | PharmEasy, 1mg |
| **Beauty & Personal Care** | Cosmetics, grooming | Various seller apps |
| **Home & Kitchen** | Household goods, appliances | Various seller apps |
| **Agriculture** | Farm produce, inputs | Agrikheti |
| **Financial Services** | Insurance, investments (emerging) | Registered participants |
| **B2B Commerce** | Wholesale, supply chain | Bizom, eSamudaay |
| **Retail Vouchers** | Gift cards, vouchers | Paytm, various |

Mobility, Food & Beverage, Grocery, and Logistics have individually entered ONDC's "One Million Club" for monthly orders. [^8]

## Major Players

### Buyer Apps (BAP)
Major buyer-facing apps on ONDC include **Paytm**, **PhonePe's Pincode**, **magicpin**, **Ola**, **Tata Neu**, **Mystore**, **nStore/Hamara Mall**, **Bajaj Finserv**, **Rapido**, and several others. [^12]

### Seller Apps (SNP) & TSPs
Seller-side and technology service providers include **eSamudaay**, **Growth Falcons**, **Bizom**, **Petpooja**, **SellerApp**, **Costbo**, and dozens of smaller platforms. ONDC also has **Technology Service Providers (TSPs)** like Protean that build ONDC-compatible infrastructure. [^13]

### Government Backing
ONDC's shareholders and institutional backers include:
- **Quality Council of India (QCI)** — Founding promoter
- **Protean eGov Technologies Limited** — Co-founder
- **NPCI** — 10% stake (₹10 crore), cleared by RBI in August 2022 [^14]
- **State Bank of India** — 7.84% stake (₹10 crore) [^14]
- **CSC e-Governance** — Promoting ONDC through 3 lakh Grameen e-Stores in rural areas [^14]

### Governance
ONDC is governed by a **Board of Directors** chaired by **Adil Zainulbhai** (also Chairman of Network 18). The current **MD & CEO is Vibhor Jain** (appointed April 2026, after serving as acting CEO). [^15]

## Regulatory Framework

ONDC is **not regulated by RBI or SEBI** — it operates under the administrative purview of **DPIIT, Ministry of Commerce and Industry**. However, several regulatory frameworks apply to transactions on the network:

### Consumer Protection Act, 2019
All e-commerce on ONDC falls under the **Consumer Protection (E-Commerce) Rules, 2020**. Sellers are treated as "marketplace entities" under the Act, and consumer rights including the right to refund, right to replacement, and right to grievance redressal fully apply. [^16]

### Digital Personal Data Protection (DPDP) Act, 2023
ONDC and all network participants are **Data Fiduciaries** under India's DPDP Act (effective August 2023). This means they must obtain verifiable consent before processing personal data, ensure reasonable security safeguards, and comply with data breach notification requirements. ONDC's own privacy policy states: *"ONDC does not collect PII without your consent."* [^17]

### Network-Level Governance
ONDC has established its own **Network Policy** and **Issue & Grievance Management (IGM)** framework that all network participants must comply with. This includes:
- **ONDC Network Policy**: Governs registration, commercial terms, data governance, disclosures, and compliance requirements [^18]
- **Network Infrastructure Development and Services Fee**: A small fee charged to sustain the network infrastructure (notified December 2024, with amendments through June 2026) [^19]
- **Commercial Model**: Caps on buyer app fees (1–3% vs 15–30% on traditional platforms), transparent pricing rules [^18]

### No Direct Regulatory Oversight Gap
A significant observation: ONDC operates in a **regulatory grey zone** — it is neither a marketplace (under Consumer Protection rules) nor a financial intermediary (under RBI). It functions as a **digital public infrastructure** with self-imposed governance through its Network Policy. The DPIIT acts as the administrative ministry but does not directly regulate ONDC's network operations in the way RBI regulates payment systems. [^2]

## Consumer Rights Analysis

### What Rights Do Consumers Have on ONDC?

**1. Choice and Platform Neutrality**
Consumers can access the same sellers across multiple buyer apps. If unsatisfied with one app's interface or service, they can switch to another without losing access to their preferred sellers — a fundamental shift from walled-garden e-commerce. [^3]

**2. Right to Refund and Returns**
Under the Consumer Protection Act, 2019, consumers on ONDC are entitled to timely refunds, transparent transactions, and fair treatment. ONDC's **Cancellation & Return Policy** and the IGM framework provide structured mechanisms for these rights. Company policies cannot override Indian law. [^20]

**3. Price Transparency**
ONDC requires all prices to be the "Declared Price" — which cannot exceed MRP. Sellers must maintain price consistency across all buyer apps, preventing the algorithmic pricing manipulation seen on some traditional platforms. [^18]

**4. No Vendor Lock-in**
A consumer's purchase history and account remain with the buyer app they chose, not with a single monolithic platform. Switching buyer apps is straightforward.

### Consumer Concerns

**1. Subsidy-Dependent Experience**
The consumer experience on ONDC has been partly subsidized through incentives — cashbacks, free delivery, and discounts funded by the network or participants. As these incentives reduce, consumers may face higher effective prices, and the 54% of users who found ONDC "cumbersome" (per LocalCircles survey, May 2025) may disengage. [^21]

**2. Fragmented Responsibility**
When something goes wrong — a delayed delivery, wrong product, or payment issue — responsibility is split across buyer app, seller app, and logistics provider. While the IGM framework exists, consumers may find it confusing to navigate which entity to escalate to. [^22]

**3. Limited Product Discovery**
Not all buyer apps can access all categories. Some apps only support food or grocery. The full vision of "any buyer app, any seller" is still being realized. [^12]

**4. No Seller Ratings Standardization**
Unlike traditional platforms where a single rating system applies, ONDC's decentralized model means seller ratings and reviews may vary across buyer apps, making it harder for consumers to assess seller reliability. [^11]

## Privacy Implications

### Data Architecture and Privacy

ONDC's unbundled architecture has **both privacy benefits and risks**:

**Potential Benefits**:
- **Data minimization**: ONDC as a network layer does not itself host transaction data or consumer profiles. It acts as a routing layer between buyer apps and seller apps. [^4]
- **No single data monopoly**: Unlike a centralized marketplace that collects all consumer behavior data, ONDC disperses data across multiple participants, reducing the scope of any single data breach.
- **Consent-based**: ONDC's privacy policy explicitly states it does not collect PII without consent. [^17]

**Potential Risks**:
- **Multi-party data sharing**: A single transaction on ONDC involves at least three parties — buyer app, seller app, and logistics provider — each collecting transaction data. Consumer data (name, address, phone, order details, payment info) is shared across these parties with limited visibility into how each one processes or stores it.
- **Network Participant data governance**: ONDC's Chapter 7 (Network Data Governance) requires all participants to comply with applicable data protection laws, but the decentralized model makes **enforcement challenging**. ONDC's policy states: *"The Network Participant collecting consent from their End User shall be responsible for conveying it to the other Network Participants, as required."* [^23]
- **DPDP Act compliance**: While ONDC and its participants are subject to the DPDP Act 2023, the phased implementation (full compliance deadlines extending to May 2027) means not all provisions are yet operational. The Data Protection Board of India, meant to adjudicate violations, was still being set up as of early 2026. [^24]
- **Cross-border data transfers**: If any network participant uses cloud services hosted outside India, consumer data may be processed internationally. The DPDP Act permits government-specified transfers but the full rules are still evolving. [^24]

### Critical Observation
ONDC's privacy model resembles a **distributed consent architecture** — consent is collected by the buyer app but must be communicated to seller apps and logistics providers. This creates ambiguity about who is the **primary Data Fiduciary** for a given transaction, and who bears liability if consent was inadequate or data is misused downstream. This is a structural gap that needs regulatory clarity. [^23]

## Safeguards

### What Protections Exist for Consumers?

1. **Issue & Grievance Management (IGM) Framework**: ONDC's structured three-stage dispute resolution mechanism (detailed below). [^22]

2. **ONDC Network Policy Compliance**: All buyer apps and seller apps must publish mandatory disclosures including fee structures, return policies, and customer support details. ONDC monitors compliance through required disclosures and periodic audits. [^18]

3. **Consumer Protection Act Applicability**: The 2019 Act and its e-commerce rules apply in full. Consumers can approach **Consumer Commissions/District Forums** for unresolved disputes. The National Consumer Helpline (1915) accepts complaints in 17 languages. [^25]

4. **Price Caps and Commission Controls**: ONDC's commercial model caps buyer app fees at 1–3%, preventing predatory commission structures that can indirectly inflate consumer prices. [^18]

5. **Open Data Dashboard**: ONDC publishes an open data dashboard (opendata.ondc.org) with retail, logistics, and mobility statistics — enabling public scrutiny of network performance. [^9]

### What's Missing?

- **No dedicated privacy audit**: ONDC does not publicly disclose independent privacy impact assessments (PIA) or data protection audits of its network operations.
- **No standardized data minimization protocol**: While ONDC claims data minimization, there is no published specification of exactly what data each participant can or cannot collect during a transaction.
- **No consumer data dashboard**: Unlike UPI (where consumers can see their transaction history in one place), ONDC has no central consumer-facing view of data held by various participants across the network.
- **Exemption concerns**: The DPDP Act allows government exemptions from certain data protection provisions on grounds of national security. As a government-orchestrated initiative, ONDC's status under these exemptions is unclear. [^24]

## Complaints & Grievance Redressal

ONDC has a structured **Issue & Grievance Management (IGM)** framework designed for its multi-party architecture: [^22]

### Three-Stage Escalation Process

| Stage | Actor | Timeline | Description |
|-------|-------|----------|-------------|
| **Stage 1: Internal Resolution** | Buyer App / Seller App | 48 hours | Consumer raises complaint through buyer app. The buyer app attempts resolution with the relevant seller app and/or logistics provider. |
| **Stage 2: Escalation to ONDC** | ONDC Grievance Portal | 7 days | If the buyer app fails to resolve, the consumer can escalate to ONDC. The complaint requires the ticket number from Stage 1. ONDC facilitates mediation between the network participants. |
| **Stage 3: External Redressal** | Consumer Forum / NCH | Statutory timelines | If ONDC mediation fails, the consumer can approach the Consumer Disputes Redressal Commissions, the National Consumer Helpline (1915), or file a case in consumer court under the Consumer Protection Act, 2019. |

### How to File a Complaint

1. **With the Buyer App**: Contact customer support of the buyer app where the transaction occurred (each app lists support details on the ONDC complaints portal at ondc.org/complaints). [^12]
2. **Escalate to ONDC**: Visit ondc.org/complaints → "Raise complaint to ONDC" → provide the buyer app ticket number and transaction details. ONDC supports multiple Indian languages on its portal.
3. **Track Complaints**: Use the "Track your complaints" feature on the ONDC complaints portal. [^12]

### Known Limitations
- The IGM framework for disputes between **network participants** (e.g., buyer app vs seller app) is still being developed — the current IGM primarily addresses consumer-to-NP disputes. [^22]
- A **LocalCircles survey (May 2025)** found that 54% of e-commerce users who tried ONDC found the experience cumbersome, citing issues with app interfaces, product availability discrepancies, and slow dispute resolution. [^21]

## Critical Analysis

ONDC represents a **genuine and important policy response** to platform monopolization in Indian e-commerce. Its vision — open protocols, unbundled commerce, MSME inclusion, and consumer choice — is sound. [^1]

However, it faces structural challenges as of mid-2026:
- **Subsidy-dependent growth**: Retail orders decline when incentives are reduced, questioning sustainable adoption. [^11]
- **Governance vacuum**: Leadership transition (MD & CEO change in April 2026) and a thin governance layer create uncertainty. [^15]
- **No single dominating use case**: Despite presence in 13+ categories, ONDC has not achieved dominance in any single vertical. Mobility (Namma Yatri) is closest. [^8]
- **Builder confidence**: Technical infrastructure documentation and developer experience have been cited as areas needing improvement, affecting startup participation. [^11]

For consumers, ONDC is a **net positive** in principle — more choice, lower commissions, and open access. But the practical experience is still maturing, and consumers should be aware of the fragmented responsibility chain and the data-sharing implications of the multi-party model.

---

## Prime References

[^1]: https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2090097 — Press Information Bureau, "Revolutionizing Digital Commerce: The ONDC Initiative", January 2025
[^2]: https://ondc.org/about-ondc — ONDC Official, "About ONDC"
[^3]: https://www.ibm.com/think/topics/ondc — IBM, "What is ONDC (Open Network for Digital Commerce)?"
[^4]: https://beckn.io — Beckn Protocol, official website of the open-source protocol
[^5]: https://ecorpit.com/ondc-2026-d2c-brand-seller-scale-playbook — "ONDC 2026 D2C Brand Scale Playbook", July 2026
[^6]: https://retail.economictimes.indiatimes.com/news/e-commerce/e-tailing/ondc-crosses-20-4-cr-transactions-in-march-2025/120308007 — Economic Times, March 2025
[^7]: https://www.medianama.com/2024/08/223-ondc-hits-12-million-transactions-july — Medianama, August 2024
[^8]: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/ondc_quarterly_update_q1_fy24_25.pdf — ONDC Quarterly Update Q1 FY2025
[^9]: https://opendata.ondc.org — ONDC Open Data Dashboard
[^10]: https://indiapolicyhub.in/2026/04/16/what-is-ondc-framework-india-explained — India Policy Hub, "ONDC Framework Explained", April 2026
[^11]: https://anitva.me/2026/04/01/the-ondc-reckoning-inside-indias-open-commerce-crossroads — "The ONDC Reckoning", April 2026
[^12]: https://ondc.org/complaints — ONDC Official, Complaints Portal (buyer app list)
[^13]: https://ondc.org/roles-you-can-play — ONDC Official, "Roles You Can Play"
[^14]: https://en.wikipedia.org/wiki/Open_Network_for_Digital_Commerce — Wikipedia, "Open Network for Digital Commerce"
[^15]: https://indianstartupnews.com/news/vibhor-jain-becomes-md-and-ceo-of-ondc-after-serving-as-acting-ceo-11711304 — Indian Startup News, April 2026
[^16]: https://resources.ondc.org/ondc-network-policy — ONDC Network Policy (official resource)
[^17]: https://ondc.org/privacy-policy — ONDC Official, Privacy Policy
[^18]: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER-%5B3%5D-Commercial%2BModel.pdf — ONDC Network Policy, Chapter 3: Commercial Model
[^19]: https://ondc.org/notifications — ONDC Official, Notifications (Network Infrastructure Fee)
[^20]: https://www.scribd.com/document/900623443/DRAFT-ONDC-Policy-Cancellation-Returns — ONDC Cancellation & Return Policy (Draft)
[^21]: https://www.localcircles.com/a/press/page/ondc-consumer-experience — LocalCircles, "54% of eCommerce users using ONDC found it cumbersome", May 2025
[^22]: https://ondc.org/blog/enabling-fair-commerce-ondcs-issue-grievance-management-igm-goes-live — ONDC Official Blog, "IGM Goes Live"
[^23]: https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/files/chapter_network-data-governance_v1-1.pdf — ONDC Network Policy, Chapter 7: Network Data Governance
[^24]: https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force — "India's DPDP Act 2023 brought into force", HL&C, November 2025
[^25]: https://consumeraffairs.gov.in/pages/nch — National Consumer Helpline (NCH), Government of India
