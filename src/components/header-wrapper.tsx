export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="relative flex h-auto items-center justify-between stroke-[#243041] stroke-black sm:justify-center">
      {children}
    </header>
  );
}
