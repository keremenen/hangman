export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="relative flex h-[58px] items-center justify-between sm:h-[125px] sm:justify-center">
      {children}
    </header>
  );
}
