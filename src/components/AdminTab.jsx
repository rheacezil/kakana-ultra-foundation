import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdminBlogs from "./AdminBlogs";
import AdminFundraiser from "./AdminFundraiser";
import AdminTable from "./AdminTable";

function AdminTab() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Donations">
              <AdminTable />
            </Tab>
            <Tab eventKey="profile" title="Fundraisers">
              <AdminFundraiser />
            </Tab>
            <Tab eventKey="longer-tab" title="Blogs">
              <AdminBlogs />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <AdminTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdminTab;
