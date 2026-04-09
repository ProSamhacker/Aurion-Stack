import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Aurion Stack | Custom web development and AI automation Retainers",
  description: "Stop paying hourly. Get fixed-outcome engineering retainers from Aurion Stack. We build custom web apps and AI business bots that guarantee ROI.",
};

export default function PricingPage() {
  return <PricingClient />;
}
