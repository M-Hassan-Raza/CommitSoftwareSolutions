import GlassCard from "../../components/GlassCard";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <GlassCard variant="section" className="mb-6">
          <h1 className="text-3xl font-bold text-brand-600">Privacy Policy</h1>
          <p className="text-neutral-700 mt-2">We respect your privacy and only collect information necessary to respond to your inquiries and deliver our services.</p>
        </GlassCard>
        <GlassCard>
          <p className="text-neutral-700">We do not sell your data. Any information you provide via our contact form or email is used solely for communication about your project. You can request deletion at any time by contacting us.</p>
        </GlassCard>
      </div>
    </div>
  );
}


