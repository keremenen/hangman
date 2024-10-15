export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex items-center justify-between">{children}</header>
  );
}
