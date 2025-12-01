import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Plenty of features to help track your finances</h2>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Add, edit and delete transactions</h3>
            </div>
            <p className="text-sm">Functions to add and track transactionsm edit their details and delete them.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Categorize transactions</h3>
            </div>
            <p className="text-sm">Keep your transactions organized by assigning them different categories.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium">Income vs Expenses tracking</h3>
            </div>
            <p className="text-sm">View the difference in your income and expenses and see spending habits.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium">Multiple Accounts</h3>
            </div>
            <p className="text-sm">Track transactions in different bank accounts</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />

              <h3 className="text-sm font-medium">Overview Dashboard</h3>
            </div>
            <p className="text-sm">See a quick overview of your recent transactions and other statistics.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Auto totals and summaries</h3>
            </div>
            <p className="text-sm">Automatic totals and summaries of transactions at the end of the month.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
