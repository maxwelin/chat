import SideNavContent from "./SideNavContent";

interface SideNavProps {
  navVisibility: boolean;
}

const SideNav = ({ navVisibility }: SideNavProps) => {
  return (
    <>
      {navVisibility && (
        <div
          id="mySidenav"
          className={`flex flex-col fixed z-10 top-77 bg-[#1a1a1a] overflow-hidden`}
        >
          <SideNavContent />
        </div>
      )}
    </>
  );
};
export default SideNav;
