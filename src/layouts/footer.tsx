import Marquee from 'react-fast-marquee';
import { Icon } from '@/util';

export default () => {
  return (
    <>
      <Icon
        type="icon-shengyin"
        style={{ color: 'rgb(var(--primary-6))', fontSize: 20 }}
      />
      <div style={{ width: 'calc(100%)', fontWeight: 'bold' }}>
        <Marquee pauseOnHover gradient={false} delay={2}>
          介绍：xxx消息通知
        </Marquee>
      </div>
    </>
  );
};
