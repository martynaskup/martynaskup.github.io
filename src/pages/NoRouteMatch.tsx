import robot2 from '../assets/images/craiyon_131139_robot-error.png';
import { Image } from 'antd';

function NoRouteMatch() {
  return (
    <div style={{ marginTop: '32px' }}>
      <h2>
        Sorry, I'm lost.
        <br />
        There should be a page, but I cannot find it.
        <br />
        Please, let Martyna know she should fix this.
      </h2>

      <Image src={robot2} width={200} style={{ borderRadius: '50%' }} />
    </div>
  );
}
export default NoRouteMatch;
