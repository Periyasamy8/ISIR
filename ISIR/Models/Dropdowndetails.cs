namespace ISIR.Models
{
    public class Dropdownlist
    {
        public List<Dropdowndetails> DropdownList { get; set; }
    }
    public class Dropdowndetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameJP { get; set; }
    }

    public class DropdownInput
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameJP { get; set; }
    }
}
