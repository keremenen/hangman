export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="relative flex items-center justify-between sm:justify-center">
      {children}
    </header>
  );
}
