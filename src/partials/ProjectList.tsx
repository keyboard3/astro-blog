import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="next-nest"
        description="无痛升级的 Node 全栈方案，结合 Next.js 和 Nest.js 的特点，采用 monorepo 管理各自代码，薄接口层轻松分离"
        link="https://github.com/keyboard3/next-nest"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Nest.js</Tags>
            <Tags color={ColorTags.LIME}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="learn-compiler"
        description="通过不断迭代写一个完善的 js 虚拟机来学习编译原理"
        link="https://github.com/keyboard3/learn-compiler"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>js</Tags>
            <Tags color={ColorTags.INDIGO}>c++</Tags>
            <Tags color={ColorTags.ROSE}>compiler</Tags>
          </>
        }
      />
      <Project
        name="HencoderKeyboard3"
        description="扔无线的 HenCode 仿写酷页面的征稿项目，内含 4 个项目"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Android</Tags>
            <Tags color={ColorTags.EMERALD}>Java</Tags>
            <Tags color={ColorTags.YELLOW}>Animation</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
