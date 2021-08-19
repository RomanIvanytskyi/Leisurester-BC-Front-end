import QueueAnim from "rc-queue-anim";

const Profile = () => {
  return (
    <p>
      <QueueAnim>
        <div key="1">enter in queue</div>
        <div key="2">enter in queue</div>
        <div key="3">enter in queue</div>
      </QueueAnim>
    </p>
  );
};
export default Profile;
