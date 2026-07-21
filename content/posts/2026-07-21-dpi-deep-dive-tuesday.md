---
title: "DPI Deep Dive — Tuesday | July 21, 2026"
date: 2026-07-21T08:30:00+05:30
draft: false
tags: ["DPI", "Deep Dive", "Layer: Tuesday"]
categories: ["DPI Deep Dive"]
description: "Weekly analysis of Tuesday layer in India's Digital Public Infrastructure"
---

# DPI Deep Dive — Tuesday | July 21, 2026

India's L2 — Payments & Financial Rails — had a landmark week. From a decisive policy reversal on UPI merchant fees to the first fully offline tap-to-pay protocol, and from UPI's expansion into Europe to Paytm's licence gambit, the infrastructure layer is moving faster than ever. Here are the five stories that defined the week.

---

## 1. The Government Is Bringing Back UPI MDR — For Real This Time

The Centre is actively considering reintroducing a Merchant Discount Rate (MDR) on UPI transactions, specifically targeting large merchants with annual turnover of ₹1–1.5 crore, and only for transactions above ₹2,000, according to multiple Economic Times reports published this week. Sources suggest the rate will be set at 5–7 basis points.

This is a watershed moment for India's payments policy. When zero-MDR was introduced in January 2020, it was a deliberate subsidy to accelerate digital adoption. Six years later, UPI processes over 700 million transactions daily — the adoption argument is settled. The government's rationale is now about financial sustainability: payment processors, PSPs, and banks have absorbed the cost of billions of free transactions, and the bill is coming due.

The Economic Times also ran an op-ed titled "Don't Put a Toll on UPI" pushing back on the proposal, warning that even a small levy risks undermining the network effects that made UPI dominant. The counterargument: India's fintech sector achieved aggregate profitability for the first time in FY25 (₹2,300 crore net profit across the sector, per Jefferies), suggesting the ecosystem can absorb a modest, targeted fee without harming consumers.

**Cross-layer connection:** This policy debate connects directly to L3 (Documents & Data Exchange) — identifying "large merchants" with ₹1+ crore turnover requires reliable data from GSTN and income tax systems. It also intersects with L7 (Security & Privacy) since MDR implementation could create new data trails for merchant surveillance.

---

## 2. NPCI Builds Offline UPI Tap-and-Pay — No Internet, No PIN

NPCI is developing an NFC-based offline UPI payment system that allows transactions up to ₹2,000 without an active internet connection, Moneycontrol and Business Standard reported on July 21. Users would tap their NFC-enabled phone at a merchant's PoS terminal; the transaction would settle from a pre-loaded UPI Lite balance, requiring no PIN entry and no cellular connectivity.

This is a direct response to use cases where connectivity fails — metro stations, flight boarding, rural markets, underground retail, and large events. NPCI is reportedly set to begin certifying terminals for this capability this year.

The architecture is clever: it decouples the payment instruction from the real-time settlement layer. Money sits in the UPI Lite wallet (on-device), the NFC tap authorizes a local transfer, and reconciliation happens asynchronously when connectivity returns. This mirrors how contactless card payments work globally (Visa payWave, Mastercard tap-to-pay), but crucially, it runs on India's domestic stack — UPI + RuPay rather than international card networks.

**Why this matters:** India has over 709 million active UPI QR codes across the country (Worldline India report), but QR codes require internet and screen visibility. Offline NFC tap-to-pay unlocks an entirely different merchant segment — high-velocity, low-value environments where speed matters more than receipt generation.

---

## 3. UPI Crosses 55.5 Crore Users, Links With Spain's Bizum

UPI onboarded 55.49 crore users by June 2026, the government informed Parliament this week, with cumulative transactions reaching 24,162 crore in volume and ₹314 lakh crore in value across FY26. NPCI International Payments (NIPL) is expanding UPI and RuPay to global markets.

Simultaneously, India and Spain agreed to fast-track interoperability discussions between UPI and Spain's Bizum instant payment platform during Commerce Minister Piyush Goyal's visit to Barcelona on July 19–20. Bizum, used by over 20 million people in Spain, is expanding across Europe — linking UPI to Bizum would give Indian travelers and businesses seamless payment access across Spain and potentially wider Europe.

This is the latest in a growing chain of international UPI linkages: Singapore (PayNow), UAE, Nepal, Bhutan, Sri Lanka, Mauritius, and Indonesia (QRIS) are already live. France, Oman, and several African nations are in various stages of discussion. The UPI-Bizum connection is strategically significant because Spain positions itself as India's gateway to both Europe and Latin America.

**Cross-layer connection:** International UPI expansion connects to L1 (Identity) — cross-border KYC and identity verification standards become critical when Indian UPI users transact on European payment rails, requiring DPDP Act compliance in both jurisdictions.

---

## 4. Digital Gold Sales via UPI Triple to ₹17,631 Crore in H1 2026

Digital gold sales through UPI grew over 3x year-on-year in the first half of 2026, reaching ₹17,631 crore despite a 25% decline in gold prices, Moneycontrol reported on July 20. Over 90% of digital gold was purchased through NPCI-operated UPI, making the payment rail the dominant channel for this emerging asset class.

This growth is remarkable because it happened during a price correction — indicating that the surge is driven by UPI's friction and accessibility rather than speculative momentum. Sub-₹1,000 micro-investments in digital gold have become a gateway product for first-time investors, many of whom eventually move to regulated instruments like sovereign gold bonds or mutual funds.

**The regulatory shadow:** Digital gold remains largely unregulated in India. RBI has flagged concerns about consumer protection, custody risk (who holds the physical gold backing digital units?), and the potential for systemic risk if a major provider fails. The RBI's draft PPI Master Direction released on June 25, 2026, may bring digital gold under formal regulatory oversight — a development worth watching closely.

---

## 5. Paytm Applies for PPI Licence — A Post-Payments Bank Rebirth

One97 Communications (Paytm's parent) has applied for a Prepaid Payment Instrument (PPI) licence through its subsidiary Paytm Payments Services Ltd (PPSL), the company disclosed in its June quarter investor presentation. This marks Paytm's first formal step toward reviving its wallet business after RBI cancelled Paytm Payments Bank's licence in early 2024.

The wallet was once Paytm's core consumer product — the on-ramp that acquired millions of users before the company expanded into merchant payments, lending, and ticketing. Losing the payments bank licence was a body blow; the PPI application is Paytm's attempt to rebuild that consumer relationship on a different regulatory foundation.

The timing is telling. Paytm reported improving financials this quarter and has spent the past year rebuilding its payments infrastructure by partnering with multiple banks. A wallet licence would restore a key piece of the consumer payments puzzle and give Paytm a stored-value instrument to compete with PhonePe and Google Pay, both of which have their own wallet-like features.

**Cross-layer connection:** The PPI licence pathway intersects with L5 (Sectoral Infrastructure) — Paytm's lending and insurance distribution businesses benefit from having a wallet as a funding source and transaction medium, creating a closed-loop financial services ecosystem.

---




---

## Bonus: Pine Labs Turns Profitable — The Infrastructure Play Pays Off

Pine Labs, the Gurugram-based payments and commerce infrastructure company, reported its first full-year profit in FY26 — ₹113 crore PAT versus a ₹145 crore loss in FY25, a ₹258 crore swing. Revenue grew 19% to ₹2,711 crore, while gross transaction value surged 50% to $194 billion.

Pine Labs is a bellwether for India's offline-to-online payments transition. The company processes transactions for merchants across 22 countries, and its profitability signals that the merchant-facing payments infrastructure layer — PoS terminals, payment gateways, and affordability products (EMI) — has reached economic maturity. The company reported that over ₹50 of every incremental ₹100 of contribution margin now flows to adjusted EBITDA.

This is relevant to the UPI story because Pine Labs' growth is partly driven by UPI's expansion into offline commerce. As UPI Lite, NFC tap-to-pay, and RuPay credit-on-UPI gain adoption, the merchant infrastructure players like Pine Labs benefit disproportionately — they sit between the NPCI rail and the merchant, capturing value from integration complexity.

## The Big Picture

This week crystallised four structural themes for India's payments rails:

1. **Monetisation is coming, but surgically.** After years of zero-MDR subsidies, the government is serious about making the ecosystem financially sustainable — but only for those who can absorb it. The ₹2,000 floor and ₹1–1.5 crore merchant threshold suggest a deliberate effort to tax only the most digitised, highest-value transactions while leaving kirana payments untouched. The question is whether this line holds, or whether it creeps downward over successive budgets. The ET op-ed's warning against a "toll" mentality is worth heeding: UPI's adoption was built on the promise of free, and even a small fee changes the psychological calculus for merchants who chose digital over cash specifically because it was zero-cost.

2. **Offline capability is the next frontier.** UPI has conquered the internet-connected world. Offline NFC tap-to-pay targets the remaining edge cases — Delhi Metro turnstiles, airport boarding gates, rural haat bazaars, and underground retail — where QR codes fail. NPCI's move mirrors what Singapore did with NETS contactless and what the Eurozone achieved with contactless cards, but with a crucial difference: India's stack is domestic, open, and interoperable by design. UPI Lite's on-device balance model sidesteps the need for real-time bank connectivity, turning every NFC-capable phone into a self-contained payment instrument.

3. **Global UPI is no longer aspirational — it's geopolitical.** With 55.5 crore users and international linkages multiplying, UPI is becoming a genuine global payments network. The Spain-Bizum talks signal that European nations see strategic value in connecting to India's rail. Each new linkage creates bilateral financial infrastructure that makes trade and remittances cheaper — and harder to reverse. For Indian travellers, the practical impact is already visible: UPI QR payments work in Singapore, UAE, Nepal, Sri Lanka, and parts of Southeast Asia. Adding Spain would extend that reach to a major European tourism and business hub.

4. **The fintech maturation cycle is accelerating.** Pine Labs' first profitable year, Paytm's PPI licence application, Razorpay's IPO preparations, and the broader fintech sector's first aggregate profit (₹2,300 crore in FY25, per Jefferies) all point to the same trend: India's payments companies are graduating from growth-at-all-costs to sustainable, regulated financial services businesses. The IPO pipeline — Razorpay (₹4,500 crore), PhonePe, Moneyview, Kreditbee — suggests that public market investors will soon have broad exposure to India's payments infrastructure layer.

India's payments infrastructure is entering a mature phase. The debates have shifted from "will UPI work?" to "how should UPI be governed, monetised, and exported?" That evolution is itself the strongest signal of DPI success — the system is so deeply embedded that the questions are now about optimisation, not survival.

---

*Sources: Economic Times, Moneycontrol, Business Standard, PIB, NPCI, Rediff, Times of Oman, FinTech Futures, The Fintech Times, S&P Global*

---

*Sources: Economic Times, Moneycontrol, Business Standard, PIB, NPCI, Rediff, Times of Oman, FinTech Futures*
