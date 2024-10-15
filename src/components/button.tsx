export default function Button({ children }: { children: string }) {
  return (
    <button className="small-button-background heading-s bg-blue w-full rounded-full p-2">
      {children}
    </button>
  );
}
