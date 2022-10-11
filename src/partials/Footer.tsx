import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="text-center text-sm text-gray-200">
      ©Copyright 2022 by keyboard3{' '}
      <a
        className="text-cyan-400 hover:underline"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        浙ICP备2022008282号
      </a>
    </div>
  </Section>
);

export { Footer };
