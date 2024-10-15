export default function Heading({ children }: { children: string }) {
  return (
    <h1 className="bg-heading-blue-gradient text-stroke bg-clip-text text-5xl text-transparent">
      {children}
    </h1>
  );
}
