import robot2 from '../assets/images/craiyon_131139_robot-error.png';
import { Image } from 'antd';

function NoRouteMatch() {
  return (
    <div style={{ marginTop: '32px' }}>
      <h2>
        Sorry, I'm lost.
        <br />
        I cannot find the content of this page.
        <br />
        If the URL is correct and there should be a page, please let Martyna
        know she should fix this.
      </h2>

      <Image src={robot2} width={200} style={{ borderRadius: '50%' }} />
    </div>
  );
}
export default NoRouteMatch;
