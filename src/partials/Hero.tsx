import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>keyboard3</GradientText> 👋
        </>
      }
      description={
        <>
          大前端从业者，擅长 web 开发，平时喜欢捣鼓点小玩具，对主流语言
          c++、kotlin、swift、dart、golang、rust...等都比较感兴趣
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.zhihu.com/people/keyboard3-96">
            <HeroSocial src="/assets/images/zhihu-icon.png" alt="zhihu icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
