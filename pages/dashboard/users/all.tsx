import { DashboardPageLayout } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import AllUsers from '@/components/dashboard/users/all';

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  return {
    props: {
      data
    },
    revalidate: 21600
  };
}

const UsersAllPage = ({ data }) => {
  return (
    <>
      <div className="text-2xl uppercase italic font-black mb-5">
        <FontAwesomeIcon icon={faUsers} className="text-vomit-500 mr-1" />
        <span>All Users</span>
      </div>

        {data.users.map((user) => {
          return (
            <div
              key={user.id}
              className="grid grid-cols-10 items-center"
            >
                <img src={user.image} className="h-10 w-10" />
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                <div>{user.username}</div>
                <div className="col-span-2">{user.email}</div>
                <div className="col-span-2">{user.ip}</div>
                <div>{user.eyeColor}</div>
                <div>{user.bloodGroup}</div>
            </div>
          );
        })}

        <AllUsers />
    </>
  );
};

UsersAllPage.getLayout = DashboardPageLayout;

export default UsersAllPage;
