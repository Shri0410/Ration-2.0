import React, { useState, useEffect } from "react";
import {
  User,
  Store,
  QrCode,
  MapPin,
  BarChart3,
  Users,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  RefreshCw,
  Box,
  AlertTriangle,
  CheckCircle2,
  Languages,
  Edit,
  Trash2,
  Eye,
  Plus,
  Save,
  X,
  Calendar,
  CreditCard,
  FileText,
  Truck,
  HelpCircle,
  Receipt,
  Gift,
  ArrowRightLeft,
  Ban,
  Home,
} from "lucide-react";

// --- TRANSLATIONS ---
const TRANSLATIONS = {
  en: {
    title: "Mera Ration 2.0",
    tagline: "One Nation One Ration Card",
    dashboard: "My Dashboard",
    shops: "Locate Nearby FPS",
    card: "Digital Ration Card",
    members: "Member Management",
    receipt: "Generate Receipt",
    surrender: "Surrender Card",
    transfer: "Transfer Request",
    benefits: "Benefits & Schemes",
    welcome: "Welcome Back",
    enterDetails: "Enter your details to access your ration account",
    getOtp: "Get OTP",
    verifyOtp: "Verify & Login",
    verifyText: "Enter the 6-digit code sent to your mobile",
    quickActions: "Quick Actions",
    findShops: "Find Shops",
    addMember: "Add New Member",
    checkStatus: "Check Status",
    grievance: "Grievance",
    entitlement: "Current Month Entitlement",
    available: "Available",
    lifted: "Lifted",
    stock: "Stock Level",
    navigate: "Navigate",
    membersTitle: "Manage Family Details",
    addNewMember: "Add New Member",
    formTitle: "Edit Family Member",
    personalDetails: "Personal Details",
    saveMember: "Save Member",
    cancel: "Cancel",
    name: "Name In English (Preferably as In Aadhaar)",
    nameLocal: "Name In Local Language",
    gender: "Gender",
    dob: "Date Of Birth (DD/MM/YYYY)",
    fatherName: "Father Name",
    motherName: "Mother's Name",
    relationship: "Relationship with HOF",
    aadhaar: "Aadhaar No.",
    mobile: "Mobile No.",
    profession: "Occupation",
    income: "Annual Income",
    select: "Select your gender",
    deleteConfirm: "Are you sure you want to delete this member?",
    memberAdded: "Member added successfully!",
    memberDeleted: "Member removed successfully!",
    navigateBack: "Back to List",
    kycVerified: "Verified",
    kycNotVerified: "Not Verified",
    surrenderTitle: "Surrender Ration Card",
    transferTitle: "Ration Card Transfer",
    reasonSurrender: "Reason For Surrender",
    certify:
      "I certify that the information I have written on the application form and the documents is correct.",
    submit: "Submit",
    trackTitle: "Transaction History",
    grievanceTitle: "Lodge Grievance",
    commodity: "Commodity",
    allocation: "Allocation",
    received: "Received",
    logout: "Logout",
  },
  hi: {
    title: "मेरा राशन 2.0",
    tagline: "एक राष्ट्र एक राशन कार्ड",
    dashboard: "मेरा डैशबोर्ड",
    shops: "आसपास की दुकानें खोजें",
    card: "डिजिटल राशन कार्ड",
    members: "सदस्य प्रबंधन",
    receipt: "रसीद जनरेट करें",
    surrender: "कार्ड समर्पण",
    transfer: "स्थानांतरण अनुरोध",
    benefits: "लाभ और योजनाएं",
    welcome: "वापसी पर स्वागत है",
    enterDetails: "अपने राशन खाते तक पहुंचने के लिए विवरण दर्ज करें",
    getOtp: "ओटीपी प्राप्त करें",
    verifyOtp: "सत्यापित करें और लॉगिन करें",
    verifyText: "अपने मोबाइल पर भेजा गया 6 अंकों का कोड दर्ज करें",
    quickActions: "त्वरित कार्रवाई",
    findShops: "दुकानें खोजें",
    addMember: "सदस्य जोड़ें",
    checkStatus: "स्थिति जांचें",
    grievance: "शिकायत",
    entitlement: "वर्तमान माह का अधिकार",
    available: "उपलब्ध",
    lifted: "उठाया गया",
    stock: "स्टॉक स्तर",
    navigate: "नेविगेट करें",
    membersTitle: "परिवार के सदस्य",
    addNewMember: "नया सदस्य जोड़ें",
    formTitle: "सदस्य विवरण फॉर्म",
    personalDetails: "व्यक्तिगत जानकारी",
    saveMember: "सदस्य सहेजें",
    cancel: "रद्द करें",
    name: "पूरा नाम",
    gender: "लिंग",
    dob: "जन्म तिथि",
    fatherName: "पिता का नाम",
    motherName: "माता का नाम",
    relationship: "मुखिया के साथ संबंध",
    aadhaar: "आधार संख्या",
    mobile: "मोबाइल नंबर",
    profession: "व्यवसाय",
    income: "वार्षिक आय",
    select: "चुनें",
    deleteConfirm: "क्या आप वाकई इस सदस्य को हटाना चाहते हैं?",
    memberAdded: "सदस्य सफलतापूर्वक जोड़ा गया!",
    memberDeleted: "सदस्य सफलतापूर्वक हटा दिया गया!",
    navigateBack: "सूची पर वापस",
    kycVerified: "सत्यापित",
    kycNotVerified: "सत्यापित नहीं",
    surrenderTitle: "कार्ड सरेंडर",
    transferTitle: "स्थानांतरण अनुरोध",
    reasonSurrender: "कारण",
    certify: "मैं प्रमाणित करता हूँ कि जानकारी सही है।",
    submit: "जमा करें",
    trackTitle: "लेनदेन इतिहास",
    grievanceTitle: "शिकायत दर्ज करें",
    commodity: "वस्तु",
    allocation: "आवंटन",
    received: "प्राप्त किया",
    logout: "लॉग आउट",
  },
  mr: {
    title: "माझा राशन 2.0",
    tagline: "एक देश एक राशन कार्ड",
    dashboard: "माझा डॅशबोर्ड",
    shops: "जवळपासची दुकाने शोधा",
    card: "डिजिटल राशन कार्ड",
    members: "सदस्य व्यवस्थापन",
    receipt: "पावती तयार करा",
    surrender: "समर्पण कार्ड",
    transfer: "हस्तांतरण विनंती",
    benefits: "फायदे आणि योजना",
    welcome: "पुन्हा स्वागत आहे",
    enterDetails: "आपल्या राशन खात्यात प्रवेश करण्यासाठी तपशील प्रविष्ट करा",
    getOtp: "OTP मिळवा",
    verifyOtp: "पडताळणी करा आणि लॉगिन करा",
    verifyText: "आपल्या मोबाइलवर पाठवलेला 6-अंकी कोड प्रविष्ट करा",
    quickActions: "त्वरित क्रिया",
    findShops: "दुकाने शोधा",
    addMember: "सदस्य जोडा",
    checkStatus: "स्थिती तपासा",
    grievance: "तक्रार",
    entitlement: "चालू महिन्याचा हक्क",
    available: "उपलब्ध",
    lifted: "उचलले",
    stock: "साठा पातळी",
    navigate: "नेव्हिगेट करा",
    membersTitle: "कुटुंबातील सदस्य",
    addNewMember: "नवीन सदस्य जोडा",
    formTitle: "सदस्य तपशील फॉर्म",
    personalDetails: "वैयक्तिक माहिती",
    saveMember: "सदस्य जतन करा",
    cancel: "रद्द करा",
    name: "पूर्ण नाव",
    gender: "लिंग",
    dob: "जन्मतारीख",
    fatherName: "वडिलांचे नाव",
    motherName: "आईचे नाव",
    relationship: "प्रमुखाशी नाते",
    aadhaar: "आधार क्रमांक",
    mobile: "मोबाईल नंबर",
    profession: "व्यवसाय",
    income: "वार्षिक उत्पन्न",
    select: "निवडा",
    deleteConfirm: "आपण खरोखर या सदस्याला काढू इच्छिता?",
    memberAdded: "सदस्य यशस्वीरित्या जोडला!",
    memberDeleted: "सदस्य यशस्वीरित्या काढला!",
    navigateBack: "यादीकडे परत",
    kycVerified: "सत्यापित",
    kycNotVerified: "सत्यापित नाही",
    surrenderTitle: "कार्ड समर्पण",
    transferTitle: "हस्तांतरण विनंती",
    reasonSurrender: "कारण",
    certify: "माहिती बरोबर आहे.",
    submit: "सबमिट करा",
    trackTitle: "व्यवहार इतिहास",
    grievanceTitle: "तक्रार नोंदवा",
    commodity: "वस्तू",
    allocation: "वाटप",
    received: "प्राप्त",
    logout: "लॉग आउट",
  },
};

// --- MOCK DATA ---
const INITIAL_MEMBERS = [
  {
    id: 1,
    memberId: "2150003705",
    name: "Rajesh Kumar",
    gender: "Male",
    age: 45,
    rel: "Self (HOF)",
    aadhaar: "XXXX-XXXX-1234",
    status: "Active",
    kyc: true,
    mobile: "98****1234",
  },
  {
    id: 2,
    memberId: "2150003706",
    name: "Sunita Devi",
    gender: "Female",
    age: 42,
    rel: "Spouse",
    aadhaar: "XXXX-XXXX-5678",
    status: "Active",
    kyc: false,
    mobile: "NA",
  },
  {
    id: 3,
    memberId: "2150003707",
    name: "Amit Kumar",
    gender: "Male",
    age: 18,
    rel: "Son",
    aadhaar: "XXXX-XXXX-9012",
    status: "Active",
    kyc: false,
    mobile: "NA",
  },
  {
    id: 4,
    memberId: "2150003708",
    name: "Priya Kumari",
    gender: "Female",
    age: 16,
    rel: "Daughter",
    aadhaar: "XXXX-XXXX-3456",
    status: "Active",
    kyc: true,
    mobile: "NA",
  },
];

const ENTITLEMENT_TABLE = [
  {
    commodity: "Wheat",
    allocation: 12.0,
    received: 12.0,
    month: "August 2025",
  },
  { commodity: "Rice", allocation: 18.0, received: 18.0, month: "August 2025" },
];

const TRANSACTIONS = [
  {
    id: 1,
    date: "10 Aug 2025",
    amount: "30 KG",
    status: "Success",
    shop: "Sharma FPS",
  },
  {
    id: 2,
    date: "12 Jul 2025",
    amount: "30 KG",
    status: "Success",
    shop: "Sharma FPS",
  },
  {
    id: 3,
    date: "05 Jun 2025",
    amount: "30 KG",
    status: "Success",
    shop: "Apna Ration",
  },
];

const MOCK_USER = {
  name: "Rajesh Kumar",
  cardId: "RC-1092837465",
  type: "PHH (Priority Household)",
  address: "Sector 4, Vikas Nagar, New Delhi",
  entitlements: [
    { item: "Wheat", total: 20, lifted: 12, unit: "kg", color: "bg-amber-400" },
    { item: "Rice", total: 15, lifted: 5, unit: "kg", color: "bg-emerald-400" },
    { item: "Sugar", total: 2, lifted: 2, unit: "kg", color: "bg-blue-400" },
  ],
  fpsName: "Santosh Kumar FPS",
};

const MOCK_SHOPS = [
  {
    id: 1,
    name: "Sharma FPS Store",
    dist: "0.5 km",
    status: "Open",
    stock: "High",
    wheat: 400,
    rice: 200,
  },
  {
    id: 2,
    name: "Apna Ration Kendra",
    dist: "1.2 km",
    status: "Open",
    stock: "Medium",
    wheat: 150,
    rice: 80,
  },
  {
    id: 3,
    name: "Govt. Distribution Ctr",
    dist: "2.5 km",
    status: "Closed",
    stock: "Low",
    wheat: 20,
    rice: 0,
  },
];

const MOCK_DEALER = {
  name: "Sharma FPS Store",
  id: "FPS-2039",
  location: "Vikas Nagar",
  stock: {
    wheat: { current: 450, capacity: 1000, unit: "kg" },
    rice: { current: 280, capacity: 800, unit: "kg" },
    sugar: { current: 45, capacity: 100, unit: "kg" },
    oil: { current: 0, capacity: 200, unit: "L" },
  },
};

// --- SHARED COMPONENTS ---

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyle =
    "px-4 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 text-sm";
  // THEME: #f1c12a (Gold)
  const variants = {
    primary:
      "bg-[#f1c12a] text-black hover:bg-[#dcb026] shadow-lg shadow-orange-100",
    secondary:
      "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    outline: "border-2 border-[#f1c12a] text-[#f1c12a] hover:bg-yellow-50",
    danger: "bg-red-50 text-red-600 hover:bg-red-100",
    ghost: "text-slate-500 hover:bg-slate-100 border-transparent",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  required = false,
}) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#f1c12a] focus:border-[#f1c12a] outline-none transition-all text-sm"
    />
  </div>
);

const Select = ({ label, options, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#f1c12a] focus:border-[#f1c12a] outline-none transition-all text-sm bg-white"
    >
      <option value="">-- Select --</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

// --- MEMBER MANAGEMENT COMPONENT ---
const MemberManager = ({ t, showToast, onBack }) => {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [view, setView] = useState("list"); // list, form
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    nameLocal: "",
    gender: "",
    dob: "",
    fatherName: "",
    relationship: "",
    aadhaar: "",
    mobile: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddNewClick = () => {
    setEditingId(null);
    setFormData({
      name: "",
      nameLocal: "",
      gender: "",
      dob: "",
      fatherName: "",
      relationship: "",
      aadhaar: "",
      mobile: "",
    });
    setView("form");
  };

  const handleEditClick = (member) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      nameLocal: "स्थानीय नाम",
      gender: member.gender,
      dob: "1980-01-01",
      fatherName: "NA",
      relationship: member.rel,
      aadhaar: member.aadhaar,
      mobile: member.mobile,
    });
    setView("form");
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(t.deleteConfirm)) {
      setMembers((prev) => prev.filter((m) => m.id !== id));
      showToast(t.memberDeleted, "success");
    }
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast("Name is required!", "error");
      return;
    }
    showToast(t.memberAdded, "success");
    setView("list");
  };

  if (view === "list") {
    return (
      <div className="animate-in fade-in duration-300">
        <div className="flex items-center justify-between mb-6">
          <div
            className="flex items-center gap-2 text-slate-500 cursor-pointer hover:text-[#f1c12a]"
            onClick={onBack}
          >
            <ChevronRight className="rotate-180" size={20} /> {t.navigateBack}
          </div>
          <Button
            onClick={handleAddNewClick}
            className="!px-3 !py-2 text-xs font-bold"
          >
            <Plus size={16} /> {t.addNewMember}
          </Button>
        </div>

        <div className="space-y-4">
          {members.map((member) => (
            <Card
              key={member.id}
              className="p-0 border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">
                      {member.name} ({member.rel}) |{" "}
                      {member.gender === "Male" ? "M" : "F"}/0
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      className="w-8 h-8 bg-[#f1c12a] text-black rounded flex items-center justify-center hover:bg-[#dcb026]"
                      title="View"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleEditClick(member)}
                      className="w-8 h-8 bg-emerald-500 text-white rounded flex items-center justify-center hover:bg-emerald-600"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(member.id)}
                      className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-600">
                      Aadhaar KYC
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold border ${
                        member.kyc
                          ? "bg-white text-green-600 border-green-600"
                          : "bg-white text-red-600 border-red-600"
                      }`}
                    >
                      {member.kyc ? t.kycVerified : t.kycNotVerified}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">
                      Mobile No.:
                    </span>{" "}
                    <span className="text-slate-500">{member.mobile}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">Member ID:</span>{" "}
                    <span className="text-slate-500">{member.memberId}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">
                      Aadhaar No.:
                    </span>{" "}
                    <span className="text-slate-500">{member.aadhaar}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // FORM VIEW
  return (
    <div className="animate-in slide-in-from-right-8 duration-300">
      <div
        className="flex items-center gap-2 mb-6 cursor-pointer text-slate-500 hover:text-[#f1c12a]"
        onClick={() => setView("list")}
      >
        <ChevronRight className="rotate-180" size={20} />
        <span className="font-medium">{t.navigateBack}</span>
      </div>

      <Card className="p-6">
        <h2 className="text-center text-xl font-bold text-slate-800 mb-8 border-b pb-4">
          {t.personalDetails}
        </h2>
        <div className="space-y-4">
          <Input
            label={t.name}
            required
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <Input
            label={t.nameLocal}
            value={formData.nameLocal}
            onChange={(e) => handleInputChange("nameLocal", e.target.value)}
          />
          <Select
            label={t.gender}
            required
            options={["Male", "Female", "Other"]}
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
          />
          <Input
            label={t.dob}
            required
            value={formData.dob}
            onChange={(e) => handleInputChange("dob", e.target.value)}
            placeholder="DD/MM/YYYY"
          />
          <Input
            label={t.fatherName}
            value={formData.fatherName}
            onChange={(e) => handleInputChange("fatherName", e.target.value)}
          />
          <Select
            label={t.relationship}
            options={["Self", "Spouse", "Son", "Daughter", "Father", "Mother"]}
            value={formData.relationship}
            onChange={(e) => handleInputChange("relationship", e.target.value)}
          />
        </div>
        <div className="mt-8">
          <Button onClick={handleSave} className="w-full">
            {t.saveMember}
          </Button>
        </div>
      </Card>
    </div>
  );
};

// --- FEATURE SCREENS ---

const SurrenderForm = ({ t, onBack, showToast }) => {
  const [reason, setReason] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div
        className="flex items-center gap-2 mb-4 text-slate-500 cursor-pointer hover:text-[#f1c12a]"
        onClick={onBack}
      >
        <ChevronRight className="rotate-180" size={20} /> {t.navigateBack}
      </div>
      <Card className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          {t.surrenderTitle}
        </h2>
        <Select
          label={t.reasonSurrender}
          required
          options={["Migration", "Income Increase", "Govt Job", "Other"]}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <div className="flex gap-3 items-start mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 w-5 h-5 text-[#f1c12a] rounded focus:ring-[#f1c12a]"
          />
          <p className="text-sm text-slate-700">{t.certify}</p>
        </div>
        <Button
          onClick={() => {
            showToast("Request Submitted", "success");
            onBack();
          }}
          className="w-full"
        >
          {t.submit}
        </Button>
      </Card>
    </div>
  );
};

const TransferForm = ({ t, onBack, showToast }) => {
  const [state, setState] = useState("");
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div
        className="flex items-center gap-2 mb-4 text-slate-500 cursor-pointer hover:text-[#f1c12a]"
        onClick={onBack}
      >
        <ChevronRight className="rotate-180" size={20} /> {t.navigateBack}
      </div>
      <Card className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          {t.transferTitle}
        </h2>
        <Select
          label="Target State"
          options={["Delhi", "Maharashtra", "Punjab", "Karnataka"]}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Select
          label="Target District"
          options={["District A", "District B"]}
        />
        <Input label="Remarks" placeholder="Reason for transfer" />
        <Button
          onClick={() => {
            showToast("Transfer Initiated Successfully", "success");
            onBack();
          }}
          className="w-full"
        >
          {t.submit}
        </Button>
      </Card>
    </div>
  );
};

const EntitlementsDetail = ({ t, onBack }) => (
  <div className="animate-in slide-in-from-right duration-300">
    <div
      className="flex items-center gap-2 mb-4 text-slate-500 cursor-pointer hover:text-[#f1c12a]"
      onClick={onBack}
    >
      <ChevronRight className="rotate-180" size={20} /> {t.navigateBack}
    </div>
    <Card className="p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-4">{t.entitlement}</h2>
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#f1c12a]/20 text-slate-700">
            <tr>
              <th className="p-3">{t.commodity}</th>
              <th className="p-3">{t.allocation}</th>
              <th className="p-3">{t.received}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ENTITLEMENT_TABLE.map((item, i) => (
              <tr key={i}>
                <td className="p-3 font-medium">
                  {item.commodity}
                  <div className="text-xs text-slate-400">{item.month}</div>
                </td>
                <td className="p-3">{item.allocation}</td>
                <td className="p-3">{item.received}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

const TrackView = ({ t, onBack }) => (
  <div className="animate-in slide-in-from-right duration-300">
    <div
      className="flex items-center gap-2 mb-4 text-slate-500 cursor-pointer hover:text-[#f1c12a]"
      onClick={onBack}
    >
      <ChevronRight className="rotate-180" size={20} /> {t.navigateBack}
    </div>
    <Card className="p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6">{t.trackTitle}</h2>
      <div className="space-y-4">
        {TRANSACTIONS.map((tr) => (
          <div
            key={tr.id}
            className="flex items-center justify-between border-b border-slate-100 pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-800">{tr.amount}</p>
                <p className="text-xs text-slate-500">{tr.date}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              {tr.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const GrievanceView = ({ t, onBack, showToast }) => (
  <div className="animate-in slide-in-from-right duration-300">
    <div
      className="flex items-center gap-2 mb-4 text-slate-500 cursor-pointer hover:text-[#f1c12a]"
      onClick={onBack}
    >
      <ChevronRight className="rotate-180" size={20} /> {t.navigateBack}
    </div>
    <Card className="p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        {t.grievanceTitle}
      </h2>
      <Select
        label="Type"
        options={["Card Issue", "Quality Issue", "Dealer Issue"]}
      />
      <Input label="Description" placeholder="..." />
      <Button
        onClick={() => {
          showToast("Complaint Registered", "success");
          onBack();
        }}
        className="w-full"
      >
        {t.submit}
      </Button>
    </Card>
  </div>
);

// --- LOGIN SCREEN COMPONENT ---
const LoginScreen = ({ setView, showToast, lang, setLang, t }) => {
  const [role, setRole] = useState("beneficiary");
  const [step, setStep] = useState(1);
  const [idValue, setIdValue] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = () => {
    if (!idValue) return showToast("Please enter a valid ID", "error");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      showToast(`OTP sent to registered mobile ending in ******8829`);
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6)
      return showToast("Please enter a 6-digit OTP", "error");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast("Verification Successful!");
      if (role === "beneficiary") setView("user-dashboard");
      else setView("dealer-dashboard");
    }, 1500);
  };

  // Updated Aadhaar Validation Handler
  const handleIdChange = (e) => {
    const raw = e.target.value;
    if (role === "beneficiary") {
      // Remove non-digits
      const digits = raw.replace(/\D/g, "");
      // Limit to 12 digits
      const limitedDigits = digits.slice(0, 12);
      // Add dashes
      let formatted = "";
      for (let i = 0; i < limitedDigits.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formatted += "-";
        }
        formatted += limitedDigits[i];
      }
      setIdValue(formatted);
    } else {
      setIdValue(raw);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8e1] via-white to-white flex items-center justify-center p-4 relative">
      {/* Language Switcher Top Right */}
      <div className="absolute top-4 right-4 z-50 flex gap-2 bg-white p-1 rounded-lg shadow-sm border border-slate-200">
        {["mr", "hi", "en"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 text-xs font-bold rounded uppercase transition-colors ${
              lang === l
                ? "bg-[#f1c12a] text-black"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            {l === "mr" ? "मराठी" : l === "hi" ? "हिंदी" : "ENG"}
          </button>
        ))}
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#f1c12a] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Emblem"
                className="w-10 h-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-black mb-1">{t.title}</h1>
            <p className="text-black/70 text-sm font-medium">{t.tagline}</p>
          </div>
        </div>

        {/* Toggle Role */}
        <div className="flex border-b border-slate-100">
          <button
            onClick={() => {
              setRole("beneficiary");
              setStep(1);
              setIdValue("");
            }}
            className={`flex-1 py-4 text-sm font-medium transition-colors ${
              role === "beneficiary"
                ? "text-[#f1c12a] border-b-2 border-[#f1c12a] bg-yellow-50/50"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Beneficiary
          </button>
          <button
            onClick={() => {
              setRole("dealer");
              setStep(1);
              setIdValue("");
            }}
            className={`flex-1 py-4 text-sm font-medium transition-colors ${
              role === "dealer"
                ? "text-[#f1c12a] border-b-2 border-[#f1c12a] bg-yellow-50/50"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Dealer / FPS
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          {step === 1 ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-slate-800">
                  {t.welcome}
                </h2>
                <p className="text-slate-500 text-sm">{t.enterDetails}</p>
              </div>

              <Input
                label={
                  role === "beneficiary"
                    ? "Aadhaar Number"
                    : "FPS License Number"
                }
                placeholder={
                  role === "beneficiary" ? "XXXX-XXXX-XXXX" : "Enter License ID"
                }
                value={idValue}
                onChange={handleIdChange}
                maxLength={role === "beneficiary" ? 14 : 20}
              />

              <Button
                onClick={handleSendOtp}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : t.getOtp}
              </Button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-slate-800">
                  Verify OTP
                </h2>
                <p className="text-slate-500 text-sm">{t.verifyText}</p>
              </div>

              <div className="flex justify-center gap-2 mb-6">
                <input
                  type="text"
                  maxLength="6"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full text-center text-2xl font-bold tracking-[1em] py-3 border-b-2 border-[#f1c12a] focus:border-[#f1c12a] outline-none bg-transparent transition-colors"
                  placeholder="• • • • • •"
                />
              </div>

              <Button
                onClick={handleVerifyOtp}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : t.verifyOtp}
              </Button>

              <button
                onClick={() => setStep(1)}
                className="w-full text-center text-sm text-[#f1c12a] hover:underline mt-4 font-medium"
              >
                Change ID / Number
              </button>
            </div>
          )}
        </div>

        <div className="bg-slate-50 p-4 text-center text-xs text-slate-400">
          Government of India • Dept of Food & Public Distribution
        </div>
      </div>
    </div>
  );
};

// --- BENEFICIARY DASHBOARD ---
const UserDashboard = ({ setView, lang, setLang, t, showToast }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [activeFeature, setActiveFeature] = useState(null);

  // Scroll to top when tab or feature changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, activeFeature]);

  const MENU_ITEMS = [
    {
      id: "members",
      icon: Users,
      label: t.members,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      id: "entitlements",
      icon: FileText,
      label: t.entitlement,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      id: "track",
      icon: Truck,
      label: t.checkStatus,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      id: "grievance",
      icon: HelpCircle,
      label: t.grievance,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      id: "receipt",
      icon: Receipt,
      label: t.receipt,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      id: "surrender",
      icon: Ban,
      label: t.surrender,
      color: "text-slate-600",
      bg: "bg-slate-50",
    },
    {
      id: "transfer",
      icon: ArrowRightLeft,
      label: t.transfer,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      id: "benefits",
      icon: Gift,
      label: t.benefits,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
  ];

  const renderContent = () => {
    if (activeTab === "home" && activeFeature) {
      switch (activeFeature) {
        case "members":
          return (
            <MemberManager
              t={t}
              showToast={showToast}
              onBack={() => setActiveFeature(null)}
            />
          );
        case "entitlements":
          return (
            <EntitlementsDetail t={t} onBack={() => setActiveFeature(null)} />
          );
        case "surrender":
          return (
            <SurrenderForm
              t={t}
              showToast={showToast}
              onBack={() => setActiveFeature(null)}
            />
          );
        case "transfer":
          return (
            <TransferForm
              t={t}
              showToast={showToast}
              onBack={() => setActiveFeature(null)}
            />
          );
        case "track":
          return <TrackView t={t} onBack={() => setActiveFeature(null)} />;
        case "grievance":
          return (
            <GrievanceView
              t={t}
              showToast={showToast}
              onBack={() => setActiveFeature(null)}
            />
          );
        case "receipt":
          return (
            <div className="p-8 text-center">
              <Receipt className="w-16 h-16 mx-auto text-purple-400 mb-4" />
              <p>Receipt #88291</p>
              <Button
                variant="ghost"
                onClick={() => setActiveFeature(null)}
                className="mt-4"
              >
                Back
              </Button>
            </div>
          );
        default:
          return (
            <div className="p-8 text-center">
              <p>Coming Soon</p>
              <Button variant="ghost" onClick={() => setActiveFeature(null)}>
                Back
              </Button>
            </div>
          );
      }
    }

    if (activeTab === "home")
      return (
        <div className="space-y-6 animate-in fade-in duration-500">
          {/* User Profile Summary */}
          <div className="bg-gradient-to-r from-[#f1c12a] to-[#d4a010] rounded-2xl p-6 text-black shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">{MOCK_USER.name}</h2>
                <p className="text-black/70 flex items-center gap-2">
                  <Smartphone size={16} /> {MOCK_USER.cardId}
                </p>
              </div>
              <div className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                <span className="text-xs uppercase tracking-wider font-bold opacity-80">
                  Card Type
                </span>
                <div className="font-semibold">{MOCK_USER.type}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Entitlements Section - Full Width */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">
                  {t.entitlement}
                </h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  Nov 2025
                </span>
              </div>

              <div className="space-y-6">
                {MOCK_USER.entitlements.map((item, idx) => {
                  const percentage = Math.round(
                    (item.lifted / item.total) * 100
                  );
                  return (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-700">
                          {item.item}
                        </span>
                        <span className="text-slate-500">
                          {item.lifted} / {item.total} {item.unit}
                        </span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      {item.lifted < item.total && (
                        <p className="text-xs text-slate-400 mt-1 text-right">
                          {t.available}: {item.total - item.lifted} {item.unit}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Services Grid - 2 Columns with Larger Icons */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                {t.quickActions}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeature(item.id)}
                    className="flex flex-col items-center gap-2 group p-4 border border-slate-50 rounded-xl hover:bg-slate-50 transition-all"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shadow-sm active:scale-95 transition-transform group-hover:shadow-md`}
                    >
                      <item.icon size={32} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 text-center leading-tight group-hover:text-[#f1c12a] transition-colors">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    if (activeTab === "shops")
      return (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="relative">
            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by pincode or area..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#f1c12a] outline-none shadow-sm"
            />
          </div>

          {MOCK_SHOPS.map((shop) => (
            <Card
              key={shop.id}
              className="p-5 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#fff8e1] rounded-lg flex items-center justify-center text-[#f1c12a] font-bold">
                    FPS
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{shop.name}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {shop.dist} away
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      shop.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {shop.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex gap-6">
                <div className="text-center">
                  <p className="text-xs text-slate-400 uppercase">{t.stock}</p>
                  <p
                    className={`text-sm font-bold ${
                      shop.stock === "High"
                        ? "text-green-600"
                        : shop.stock === "Medium"
                        ? "text-amber-600"
                        : "text-red-600"
                    }`}
                  >
                    {shop.stock}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400 uppercase">Wheat</p>
                  <p className="text-sm font-bold text-slate-700">
                    {shop.wheat} kg
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400 uppercase">Rice</p>
                  <p className="text-sm font-bold text-slate-700">
                    {shop.rice} kg
                  </p>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" className="!py-1.5 !px-3 text-xs">
                    {t.navigate}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      );

    if (activeTab === "card")
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in zoom-in-95 duration-300">
          <Card className="w-full max-w-sm p-0 overflow-hidden relative group">
            <div className="bg-[#f1c12a] h-2 absolute top-0 w-full"></div>
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-[#fff8e1] rounded-full mx-auto flex items-center justify-center mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                  alt="Emblem"
                  className="w-12 h-12 opacity-80"
                />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Mera Ration Card
              </h2>
              <p className="text-sm text-slate-500 mb-6">{MOCK_USER.name}</p>

              <div className="bg-white p-4 border-2 border-dashed border-slate-300 rounded-xl inline-block mb-6">
                <QrCode size={140} className="text-slate-800" />
              </div>

              <div className="text-left bg-slate-50 p-4 rounded-lg text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Card No:</span>
                  <span className="font-mono font-medium">
                    {MOCK_USER.cardId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Members:</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Address:</span>
                  <span className="font-medium text-right truncate w-40">
                    {MOCK_USER.address}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
              <p className="text-xs text-slate-400">
                Show this QR code at the FPS shop to avail ration.
              </p>
            </div>
          </Card>

          <Button className="mt-6" variant="secondary">
            Download PDF
          </Button>
        </div>
      );

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0 md:pl-64 transition-all">
      {/* Mobile Navigation Bottom Bar with Logout */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 z-50 pb-safe">
        {[
          { id: "home", icon: User, label: "Home" },
          { id: "members", icon: Users, label: "Members" },
          { id: "shops", icon: MapPin, label: "Shops" },
          { id: "card", icon: QrCode, label: "Card" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 ${
              activeTab === item.id ? "text-[#f1c12a]" : "text-slate-400"
            }`}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}

        {/* Added Logout Button to Mobile Nav */}
        <button
          onClick={() => setView("login")}
          className="flex flex-col items-center gap-1 text-red-500"
        >
          <LogOut size={20} />
          <span className="text-[10px] font-medium">{t.logout}</span>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-[#1a1a1a] text-white flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10">
          {/* Bharat Sarkar Logo added to Dashboard Header */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Emblem"
            className="w-8 h-auto invert opacity-90"
          />
          <h1 className="text-xl font-bold text-[#f1c12a]">Mera Ration</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {[
            { id: "home", icon: User, label: t.dashboard },
            { id: "members", icon: Users, label: t.members },
            { id: "shops", icon: MapPin, label: t.shops },
            { id: "card", icon: QrCode, label: t.card },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-[#f1c12a] text-black shadow-lg"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setView("login")}
          className="flex items-center gap-3 text-gray-400 hover:text-white mt-auto px-4 py-2"
        >
          <LogOut size={18} /> {t.logout}
        </button>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:hidden">
          {/* Bharat Sarkar Logo added to Mobile Dashboard Header */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Emblem"
            className="w-6 h-auto"
          />
          <span className="font-bold text-slate-800">Mera Ration</span>
        </div>
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold text-slate-800">
            {activeTab === "home" && t.dashboard}
            {activeTab === "shops" && t.shops}
            {activeTab === "card" && t.card}
            {activeTab === "members" && t.members}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* Language Selector */}
          <div className="flex bg-slate-100 p-1 rounded-lg">
            {["mr", "hi", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-bold rounded-md uppercase transition-all ${
                  lang === l
                    ? "bg-white text-[#f1c12a] shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {l === "mr" ? "मराठी" : l === "hi" ? "हिंदी" : "ENG"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto">{renderContent()}</main>
    </div>
  );
};

// --- DEALER DASHBOARD ---
const DealerDashboard = ({ setView }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Dealer Header */}
      <header className="bg-[#1a1a1a] text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <Store className="w-6 h-6 text-[#f1c12a]" />
            </div>
            <div>
              <h1 className="font-bold text-lg">{MOCK_DEALER.name}</h1>
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <MapPin size={12} /> {MOCK_DEALER.location} • ID:{" "}
                {MOCK_DEALER.id}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-400">System Status</p>
              <p className="text-sm font-medium text-green-400 flex items-center gap-1 justify-end">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>{" "}
                Online
              </p>
            </div>
            <button
              onClick={() => setView("login")}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-5 flex items-center gap-4 border-l-4 border-l-[#f1c12a]">
            <div className="bg-yellow-50 p-3 rounded-full text-[#f1c12a]">
              <Users />
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase font-bold">
                Beneficiaries Served
              </p>
              <p className="text-2xl font-bold text-slate-800">142</p>
              <p className="text-xs text-green-600">+12 today</p>
            </div>
          </Card>
          {/* ... rest of dealer stats ... */}
        </div>

        <div className="flex items-center justify-center h-64 bg-slate-200 rounded-xl border-2 border-dashed border-slate-300 text-slate-500">
          Dealer Dashboard Content - Simplified for this view
        </div>
      </main>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function MeraRationApp() {
  const [view, setView] = useState("login");
  const [lang, setLang] = useState("en");
  const [notification, setNotification] = useState(null);

  const showToast = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Scroll to top whenever the main view changes (e.g., Login to Dashboard)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const Toast = () =>
    notification ? (
      <div
        className={`fixed top-4 right-4 z-[100] px-6 py-3 rounded-lg shadow-2xl text-white transform transition-all animate-in slide-in-from-top-2 ${
          notification.type === "error" ? "bg-red-500" : "bg-green-600"
        }`}
      >
        <div className="flex items-center gap-2">
          {notification.type === "success" ? (
            <CheckCircle2 size={18} />
          ) : (
            <AlertTriangle size={18} />
          )}
          <span className="font-medium">{notification.msg}</span>
        </div>
      </div>
    ) : null;

  const t = TRANSLATIONS[lang];

  return (
    <div className="font-sans text-slate-800">
      <Toast />
      {view === "login" && (
        <LoginScreen
          setView={setView}
          showToast={showToast}
          lang={lang}
          setLang={setLang}
          t={t}
        />
      )}
      {view === "user-dashboard" && (
        <UserDashboard
          setView={setView}
          lang={lang}
          setLang={setLang}
          t={t}
          showToast={showToast}
        />
      )}
      {view === "dealer-dashboard" && <DealerDashboard setView={setView} />}
    </div>
  );
}
