namespace ISIR.Models
{
    public class UserDetails
    {

        public int UserId { get; set; }

        public string UserName { get; set; }

        public int LabId { get; set; }

        public string LabName { get; set; }

        public string UserType { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public int ChangePassword { get; set; }

        public string HR_No { get; set; }

        public string DeptName { get; set; }
        public string SubDeptName { get; set; }

        public string Api { get; set; }

        public string UploadFileUrl { get; set; }

        public string token { get; set; }

        public string UserAccess { get; set; }

        public string language { get; set; }
        public int Access { get; set; }

        public string Chartfilelink { get; set; }
    }
    public class ISIRTracker
    {

        public int UserId { get; set; }


        public string LRRefNo { get; set; }


        public string RequestDate { get; set; }


        public string RequestorName { get; set; }


        public string SubDepartment { get; set; }


        public string PartNo { get; set; }


        public string PartName { get; set; }


        public string SupplierName { get; set; }


        public string Quantity { get; set; }


        public string Reason { get; set; }


        public string RequestStatus { get; set; }


        public string Status { get; set; }


        public string Result { get; set; }


        public string RequestStatusClass { get; set; }


        public string ClosedDate { get; set; }


        public string LRRefNoDraft { get; set; }


        public string StatusTooltip { get; set; }


        public string LabName { get; set; }

        public string ISO17025 { get; set; }



        public string PIC { get; set; }
        public string TentativeDate { get; set; }
        public string Equipment { get; set; }
        public string AcceptedDate { get; set; }

    }

    public class TrackerStatusCount
    {
        public int Count { get; set; }

        public string RequestStatus { get; set; }
    }

    public class ISIRTrackerList
    {

        public List<ISIRTracker> ISIRTracker { get; set; }

    }
    public class ISIRTrackerInput
    {

        public int UserId { get; set; }


        public int RoleId { get; set; }


        public string LabNames { get; set; }


        public string radiobuttonfilter { get; set; }
    }
}
