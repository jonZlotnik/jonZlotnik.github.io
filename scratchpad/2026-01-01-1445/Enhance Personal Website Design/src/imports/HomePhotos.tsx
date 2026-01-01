import svgPaths from "./svg-dx5cvsa6do";
import clsx from "clsx";
import imgDsc11831 from "figma:asset/fbd3f95e2fb881105cbf6425e92028cda470288f.png";
import imgDsc11832 from "figma:asset/a7b79cd2e7ca09af43025f39427ba0cf85360992.png";
import imgDsc11833 from "figma:asset/54d2091cbf4f9a40ee941f4a7e9dafa22f626fd1.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function PhotoCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[435px] items-start justify-center left-0 top-[776px] w-[411px]" data-name="Photo Card">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-nowrap text-white">
        <p className="leading-[normal]">Bees on Ile-Bizard.</p>
      </div>
      <div className="h-[275px] relative shrink-0 w-[411px]" data-name="DSC_1183 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc11831} />
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Avi and I took a walk along the Parc Ile-Bizard trails. My 55mm Nikkor Micro f/2.8 was attached when we fell upon a field of white buzzing flowers.</p>
    </div>
  );
}

function PhotoCard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[435px] items-start justify-center left-[-1px] top-[1341px] w-[411px]" data-name="Photo Card">
      <div className="flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-nowrap text-white">
        <p className="leading-[normal]">Small jumps, blind horse.</p>
      </div>
      <div className="h-[275px] relative shrink-0 w-[411px]" data-name="DSC_1183 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc11832} />
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Avi and I took a walk along the Parc Ile-Bizard trails. My 55mm Nikkor Micro f/2.8 was attached when we fell upon a field of white buzzing flowers.</p>
    </div>
  );
}

function PhotoCard2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[435px] items-start justify-center left-px top-[1906px] w-[411px]" data-name="Photo Card">
      <div className="flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-nowrap text-white">
        <p className="leading-[normal]">In the park.</p>
      </div>
      <div className="h-[275px] relative shrink-0 w-[411px]" data-name="DSC_1183 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc11833} />
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Avi and I took a walk along the Parc Ile-Bizard trails. My 55mm Nikkor Micro f/2.8 was attached when we fell upon a field of white buzzing flowers.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-1px] top-[776px]">
      <PhotoCard />
      <PhotoCard1 />
      <PhotoCard2 />
    </div>
  );
}

function MailOutline() {
  return (
    <Wrapper additionalClassNames="inset-[0_82.61%_0_0]">
      <g id="mail-outline 1">
        <path d={svgPaths.p3a2d7070} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.25 7.5L12 12.75L18.75 7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </Wrapper>
  );
}

function LogoGithub() {
  return (
    <Wrapper additionalClassNames="inset-[0_41.3%]">
      <g id="logo-github 1">
        <path d={svgPaths.p4cf3580} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </Wrapper>
  );
}

function LogoLinkedin() {
  return (
    <Wrapper additionalClassNames="inset-[0_0_0_82.61%]">
      <g id="logo-linkedin 1">
        <path d={svgPaths.pb2e3700} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </Wrapper>
  );
}

function SocialButtons() {
  return (
    <div className="absolute h-[24px] left-[137px] top-[431px] w-[138px]" data-name="Social Buttons">
      <MailOutline />
      <LogoGithub />
      <LogoLinkedin />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%-634px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute border border-solid border-white h-[45px] left-1/2 top-[calc(50%-634px)] translate-x-[-50%] translate-y-[-50%] w-[203px]" data-name="Outline" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[19.068px] justify-center leading-[0] left-1/2 not-italic text-[20px] text-center text-white top-[calc(50%-634px)] translate-x-[-50%] translate-y-[-50%] w-[150.118px]">
        <p className="leading-[normal]">Connect</p>
      </div>
    </div>
  );
}

export default function HomePhotos() {
  return (
    <div className="bg-[#1c1c1c] relative size-full" data-name="home--photos">
      <div className="absolute flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] left-[201.5px] not-italic text-[48px] text-center text-nowrap text-white top-[288px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]">Jon Zlotnik</p>
      </div>
      <Group1 />
      <SocialButtons />
      <Group />
    </div>
  );
}