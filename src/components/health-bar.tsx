import heartIcon from "../assets/images/icon-heart.svg";

export default function HealthBar() {
  return (
    <div className="flex items-center gap-4">
      <div className="after:bg-dark-navy a relative flex h-4 w-[57px] items-center rounded-full bg-white px-2 after:h-2 after:w-[30%] after:rounded-full after:content-['']" />
      <img src={heartIcon} alt="heart icon" className="size-7" />
    </div>
  );
}
