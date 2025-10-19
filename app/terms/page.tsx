import GlassCard from "../../components/GlassCard";

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <GlassCard variant="section" className="mb-6">
          <h1 className="text-3xl font-bold text-brand-600">Terms of Service</h1>
          <p className="text-neutral-700 mt-2">By engaging our services, you agree to our standard terms regarding scope, timelines, payments, and intellectual property ownership.</p>
        </GlassCard>
        <GlassCard>
          <ul className="list-disc pl-6 text-neutral-700 space-y-2">
            <li>Project scope and milestones are agreed in writing before work begins.</li>
            <li>Ownership of deliverables transfers to you upon payment of corresponding invoices.</li>
            <li>We may use open-source components under their respective licenses.</li>
            <li>Either party may terminate with notice; costs for completed work remain payable.</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}


