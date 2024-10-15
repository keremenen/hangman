export default function IconButton({ icon }: { icon: string }) {
  return (
    <button className="bg-pink-gradient flex size-10 items-center justify-center rounded-full">
      <img src={icon} alt="back" className="size-5" />
    </button>
  );
}
