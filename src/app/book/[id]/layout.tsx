export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="pt-2">
        {children}
      </section>
    )
  }