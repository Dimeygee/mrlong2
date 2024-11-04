import { MiniCircle } from "../icon";

export const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className="flex outline-none h-[41px] rounded-[20px] justify-center gap-[10px] items-center text-sm font-outfit font-bold text-white tracking-[-0.36px] leading-[26px] border-[2px] border-[rgba(255,255,255,0.10)]  w-[169px] relative overflow-hidden">
        <div className="flex absolute w-full h-full justify-center gap-[10px] items-center z-10 bg-[rgba(39,174,96,0.07)]">
          <MiniCircle />
          <span>{text}</span>
        </div>
      </button>
    </>
  );
};
