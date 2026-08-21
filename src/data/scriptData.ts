export interface ScriptSection {
  id: number;
  title: string;
  subtitle?: string;
  badgeText?: string;
  quote?: {
    text: string;
    author: string;
  };
  summaryText: string;
  contentParagraphs: string[];
  keyPoints?: { title: string; desc: string }[];
  interactiveType?: 'transform_mindmap' | 'case_study' | 'comparison_table' | 'student_hub' | 'quote_banner';
  sources?: string[];
}

export interface ReferenceSource {
  id: number;
  title: string;
  description: string;
  url?: string;
  badge?: string;
}

export const SCRIPT_SECTIONS: ScriptSection[] = [
  {
    id: 1,
    title: "1. Đặt vấn đề & Quan điểm Nhóm",
    subtitle: "Mở đầu vấn đề nghiên cứu & Tính cấp thiết",
    badgeText: "Mục 1",
    quote: {
      text: "Nếu không liên minh với nông dân thì không thể có được chính quyền của giai cấp vô sản, không thể nghĩ được đến việc duy trì chính quyền đó.",
      author: "V.I. Lênin"
    },
    summaryText: "Luận điểm của Lênin cho thấy vai trò đặc biệt của liên minh công - nông. Quan điểm của nhóm: Tư tưởng Lênin vẫn còn giá trị về nguyên tắc, nhưng cần vận dụng sáng tạo phù hợp Việt Nam hiện nay.",
    contentParagraphs: [
      "Luận điểm nổi tiếng của V.I. Lênin cho thấy vai trò đặc biệt của liên minh công – nông trong tư tưởng của ông. Tuy nhiên, xã hội ngày nay đã có nhiều thay đổi sâu sắc, xuất hiện thêm nhiều giai cấp và tầng lớp xã hội với vai trò ngày càng rõ nét.",
      "Câu hỏi nghiên cứu đặt ra: 'Tư tưởng liên minh giai cấp của Lênin còn phù hợp với Việt Nam hiện nay không, khi cơ cấu xã hội đã thay đổi lớn so với thời Lênin?'",
      "Quan điểm xuyên suốt của nhóm: Tư tưởng liên minh giai cấp của Lênin vẫn còn giá trị về nguyên tắc, nhưng cần được vận dụng sáng tạo, phù hợp với cơ cấu xã hội và điều kiện phát triển của Việt Nam hiện nay."
    ],
    keyPoints: [
      {
        title: "Thách thức bối cảnh",
        desc: "Cơ cấu xã hội hiện đại xuất hiện nhiều tầng lớp mới như trí thức, doanh nhân, lao động công nghệ."
      },
      {
        title: "Quan điểm cốt lõi",
        desc: "Kế thừa giá trị nguyên tắc – Vận dụng sáng tạo linh hoạt, không sao chép máy móc."
      }
    ],
    interactiveType: 'quote_banner'
  },
  {
    id: 2,
    title: "2. Bối cảnh lịch sử thời Lênin",
    subtitle: "Điều kiện nước Nga cuối thế kỷ XIX – đầu thế kỷ XX",
    badgeText: "Mục 2",
    summaryText: "Tư tưởng liên minh công nông được Lênin phát triển trong điều kiện nước Nga cuối XIX - đầu XX, khi công nhân chưa chiếm đa số còn nông dân rất đông đảo.",
    contentParagraphs: [
      "Tư tưởng liên minh công – nông được Lênin phát triển trong điều kiện cụ thể của nước Nga cuối thế kỷ XIX – đầu thế kỷ XX.",
      "Trong xã hội Nga lúc đó, giai cấp công nhân giữ vai trò tiên phong và quan trọng trong cách mạng nhưng không chiếm đa số dân cư, trong khi nông dân là lực lượng xã hội hết sức đông đảo.",
      "Do đó, nếu chỉ dựa vào lực lượng của riêng mình, giai cấp công nhân có nguy cơ bị cô lập và không đủ cơ sở xã hội để thực hiện mục tiêu cách mạng. Chính đặc điểm này đặt ra yêu cầu tất yếu phải xây dựng sự liên kết chặt chẽ giữa công nhân và nông dân."
    ],
    keyPoints: [
      {
        title: "Đặc điểm Giai cấp Công nhân Nga",
        desc: "Tiên phong lãnh đạo nhưng số lượng chiếm tỉ lệ nhỏ trong tổng dân số."
      },
      {
        title: "Đặc điểm Giai cấp Nông dân Nga",
        desc: "Lực lượng quần chúng đông đảo nhất, giữ vai trò quyết định cơ sở xã hội."
      },
      {
        title: "Nguy cơ nếu không liên minh",
        desc: "Giai cấp vô sản bị cô lập, thiếu sức mạnh để giành và giữ chính quyền."
      }
    ]
  },
  {
    id: 3,
    title: "3. Vì sao Lênin nhấn mạnh liên minh công – nông?",
    subtitle: "Ba trụ cột lý do căn bản",
    badgeText: "Mục 3",
    summaryText: "Lênin nhấn mạnh liên minh vì 3 lý do: lực lượng xã hội, sự thống nhất lợi ích, và mục tiêu duy trì chính quyền xây dựng xã hội mới.",
    contentParagraphs: [
      "V.I. Lênin khẳng định liên minh công - nông là nguyên tắc tối cao của chuyên chính vô sản dựa trên 3 căn cứ then chốt:"
    ],
    keyPoints: [
      {
        title: "1. Về lực lượng xã hội",
        desc: "Công nhân không chiếm đa số dân cư. Liên minh với nông dân giúp giai cấp công nhân mở rộng cơ sở xã hội rộng lớn và tránh bị cô lập."
      },
      {
        title: "2. Về sự tương hợp Lợi ích",
        desc: "Tuy vị trí kinh tế khác nhau nhưng trong điều kiện lịch sử lúc đó có những lợi ích cơ bản có thể thống nhất trong cuộc đấu tranh chống áp bức."
      },
      {
        title: "3. Về mục tiêu Lâu dài",
        desc: "Không chỉ nhằm giành chính quyền, mà còn là điều kiện quyết định để duy trì chính quyền và tổ chức xây dựng xã hội mới."
      }
    ]
  },
  {
    id: 4,
    title: "4. Bản chất và mục tiêu của liên minh giai cấp",
    subtitle: "Phương diện Chính trị - Kinh tế - Xã hội",
    badgeText: "Mục 4",
    summaryText: "Liên minh không chỉ là gộp số lượng cơ học, mà là tập hợp các lực lượng có lợi ích thống nhất trên 3 phương diện chính trị, kinh tế, xã hội.",
    contentParagraphs: [
      "Tư tưởng liên minh của Lênin không nên được hiểu đơn giản là việc kết hợp về mặt số lượng giữa công nhân và nông dân.",
      "Bản chất của liên minh là tập hợp những lực lượng xã hội có khả năng thống nhất về những lợi ích cơ bản để tạo ra sức mạnh tổng hợp thực hiện mục tiêu chung.",
      "Liên minh này thể hiện toàn diện trên 3 phương diện then chốt:"
    ],
    keyPoints: [
      {
        title: "Phương diện Chính trị",
        desc: "Tập hợp lực lượng, củng cố chính quyền vô sản và tạo cơ sở xã hội vững chắc."
      },
      {
        title: "Phương diện Kinh tế",
        desc: "Phối hợp sản xuất, lưu thông hàng hóa và giải quyết hài hòa lợi ích giữa các tầng lớp."
      },
      {
        title: "Phương diện Xã hội",
        desc: "Tạo sự đồng thuận, gắn kết bền vững giữa các nhóm lao động trong quốc gia."
      }
    ]
  },
  {
    id: 5,
    title: "5. Những giá trị cốt lõi từ tư tưởng Lênin",
    subtitle: "3 Giá trị làm thước đo đối chiếu hiện đại",
    badgeText: "Mục 5",
    summaryText: "Ba giá trị cốt lõi: Tập hợp lực lượng xã hội tránh cô lập, Liên minh dựa trên lợi ích hài hòa, và Cùng hướng đến mục tiêu chung.",
    contentParagraphs: [
      "Từ tư tưởng liên minh giai cấp của Lênin, nhóm rút ra 3 giá trị cốt lõi mang tính phương pháp luận để làm cơ sở đối chiếu với thực tiễn Việt Nam hiện nay:"
    ],
    keyPoints: [
      {
        title: "Tập hợp lực lượng xã hội",
        desc: "Một lực lượng riêng lẻ khó có thể thực hiện những mục tiêu lớn. Cần xây dựng cơ sở xã hội rộng lớn và tránh sự cô lập."
      },
      {
        title: "Liên minh trên cơ sở lợi ích",
        desc: "Liên minh không phải kết hợp cơ học mà phải dựa trên lợi ích chung và sự hài hòa lợi ích giữa các bên."
      },
      {
        title: "Hướng đến mục tiêu chung",
        desc: "Sự liên kết cần tạo thành sức mạnh tổng hợp để thực hiện các mục tiêu chính trị, kinh tế và xã hội chung."
      }
    ]
  },
  {
    id: 6,
    title: "6. Cơ cấu xã hội Việt Nam hiện nay thay đổi như thế nào?",
    subtitle: "Sự đa dạng hóa tầng lớp dưới tác động Công nghiệp hóa - Số hóa",
    badgeText: "Mục 6",
    summaryText: "Cơ cấu xã hội Việt Nam đa dạng hơn thời Lênin với công nhân kỹ thuật cao, nông dân ứng dụng công nghệ, đội ngũ trí thức, doanh nhân và các nhóm nghề kinh tế số.",
    contentParagraphs: [
      "So với bối cảnh nước Nga thời Lênin, cơ cấu xã hội Việt Nam hiện nay đã trở nên đa dạng hơn rất nhiều dưới tác động của công nghiệp hóa, hiện đại hóa, kinh tế thị trường, hội nhập quốc tế và chuyển đổi số.",
      "Cơ cấu xã hội Việt Nam hiện nay không thể chỉ được nhìn đơn thuần qua mối quan hệ 2 giai cấp công nhân và nông dân."
    ],
    keyPoints: [
      {
        title: "Giai cấp Công nhân",
        desc: "Không chỉ lao động truyền thống mà ngày càng xuất hiện nhiều lao động kỹ thuật, công nghệ, dịch vụ và sản xuất hiện đại."
      },
      {
        title: "Giai cấp Nông dân",
        desc: "Hoạt động sản xuất gắn liền với máy móc, khoa học - công nghệ, chế biến, logistics, thương mại điện tử và chuỗi cung ứng."
      },
      {
        title: "Đội ngũ Trí thức",
        desc: "Giữ vai trò then chốt trong khoa học - công nghệ, giáo dục, chuyển đổi số và đổi mới sáng tạo."
      },
      {
        title: "Đội ngũ Doanh nhân",
        desc: "Đầu tư, tổ chức sản xuất – kinh doanh, tạo việc làm, kết nối nguồn lực và phát triển thị trường."
      },
      {
        title: "Nhóm lao động mới",
        desc: "Các lực lượng lao động tự do, công nghệ số, kinh tế chia sẻ."
      }
    ],
    interactiveType: 'transform_mindmap'
  },
  {
    id: 7,
    title: "7. Liên minh giai cấp ở Việt Nam hiện nay",
    subtitle: "Công nhân ↔ Nông dân ↔ Trí thức: Nền tảng khối Đại đoàn kết",
    badgeText: "Mục 7",
    summaryText: "Việt Nam xác định liên minh Công nhân - Nông dân - Trí thức là nền tảng của khối Đại đoàn kết toàn dân tộc, kế thừa và phát triển sáng tạo tư tưởng Lênin.",
    contentParagraphs: [
      "Sự thay đổi của cơ cấu xã hội không đồng nghĩa với việc liên minh giai cấp không còn cần thiết.",
      "Trong điều kiện Việt Nam, liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức được Đảng và Nhà nước xác định là nền tảng quan trọng của khối đại đoàn kết toàn dân tộc.",
      "Điều này khẳng định Việt Nam không sao chép nguyên trạng mô hình liên minh 2 giai cấp thời Lênin mà đã kế thừa và phát triển sáng tạo trong điều kiện mới."
    ],
    keyPoints: [
      {
        title: "Mô hình thời Lênin",
        desc: "Công nhân ↔ Nông dân (2 lực lượng nòng cốt đấu tranh giành & giữ chính quyền)."
      },
      {
        title: "Mô hình Việt Nam hiện nay",
        desc: "Công nhân ↔ Nông dân ↔ Trí thức = Nền tảng của Khối Đại đoàn kết toàn dân tộc."
      }
    ],
    interactiveType: 'transform_mindmap'
  },
  {
    id: 8,
    title: "8. Vai trò của doanh nhân & các lực lượng xã hội khác",
    subtitle: "Mở rộng khối đại đoàn kết không tùy tiện thay đổi bản chất",
    badgeText: "Mục 8",
    summaryText: "Công - Nông - Trí là nền tảng, đồng thời phát huy vai trò của doanh nhân, thanh niên, phụ nữ và các tầng lớp xã hội khác.",
    contentParagraphs: [
      "Xác định công nhân – nông dân – trí thức là nền tảng không có nghĩa các lực lượng xã hội khác bị coi nhẹ.",
      "Trong nền kinh tế thị trường định hướng XHCN, doanh nhân có vai trò đặc biệt quan trọng trong đầu tư, tổ chức sản xuất – kinh doanh, tạo việc làm, phát triển thị trường và kết nối các nguồn lực.",
      "Cách diễn đạt chuẩn xác và khoa học nhất:"
    ],
    keyPoints: [
      {
        title: "Công nhân – Nông dân – Trí thức",
        desc: "Giữ vai trò là NỀN TẢNG của liên minh và khối đại đoàn kết."
      },
      {
        title: "Doanh nhân & Tầng lớp khác",
        desc: "Phát huy vai trò động lực thúc đẩy kinh tế, kết nối nguồn lực và xây dựng đất nước."
      }
    ]
  },
  {
    id: 9,
    title: "9. Case thực tế: Nông nghiệp Công nghệ cao",
    subtitle: "Minh chứng thực tiễn sự phối hợp đa lực lượng xã hội",
    badgeText: "Mục 9",
    summaryText: "Nông nghiệp công nghệ cao chứng minh sự phối hợp không thể tách rời giữa Nông dân (sản xuất), Công nhân (logistics, chế biến), Trí thức (R&D giống, số hóa) và Doanh nghiệp (thị trường).",
    contentParagraphs: [
      "Nông nghiệp công nghệ cao là minh chứng sinh động cho thấy nhu cầu phối hợp giữa nhiều lực lượng xã hội trong điều kiện kinh tế thị trường hiện đại.",
      "Để đưa một sản phẩm nông sản từ cánh đồng đến thị trường tiêu thụ quốc tế, cần sự gắn kết nhịp nhàng của 4 lực lượng:"
    ],
    keyPoints: [
      {
        title: "1. Giai cấp Nông dân",
        desc: "Trực tiếp canh tác, quản lý đất đai và áp dụng quy trình chuẩn kỹ thuật."
      },
      {
        title: "2. Công nhân & Kỹ thuật viên",
        desc: "Vận hành máy móc nông nghiệp, chế biến tinh, đóng gói tự động và vận tải logistics."
      },
      {
        title: "3. Đội ngũ Trí thức",
        desc: "Nghiên cứu giống cây trồng, công nghệ sinh học, chuyển giao phần mềm quản lý nông nghiệp số."
      },
      {
        title: "4. Đội ngũ Doanh nghiệp",
        desc: "Đầu tư vốn, tổ chức chuỗi cung ứng, xây dựng thương hiệu và bao tiêu sản phẩm ra thị trường."
      }
    ],
    interactiveType: 'case_study'
  },
  {
    id: 10,
    title: "10. Đối chiếu tư tưởng Lênin với Việt Nam hiện nay",
    subtitle: "Bảng phân tích so sánh nguyên tắc lý luận & thực tiễn vận dụng",
    badgeText: "Mục 10",
    summaryText: "Đối chiếu 5 tiêu chí chứng minh nguyên tắc tập hợp lực lượng và hài hòa lợi ích của Lênin vẫn còn nguyên giá trị, nhưng phạm vi lực lượng đã được phát triển mở rộng.",
    contentParagraphs: [
      "Dưới đây là bảng đối chiếu giữa các giá trị cốt lõi từ tư tưởng V.I. Lênin và sự thể hiện, vận dụng tại Việt Nam hiện nay:"
    ],
    interactiveType: 'comparison_table'
  },
  {
    id: 11,
    title: "11. Nhận định cốt lõi của Nhóm",
    subtitle: "Khẩu hiệu hành động: Kế thừa nguyên tắc – Không sao chép mô hình",
    badgeText: "Mục 11",
    summaryText: "Nhóm khẳng định: Kế thừa nguyên tắc - không sao chép mô hình. Tiếp tục phát huy nguyên tắc tập hợp lực lượng, hài hòa lợi ích và hướng tới mục tiêu chung.",
    contentParagraphs: [
      "Nhóm không cho rằng tư tưởng liên minh giai cấp của Lênin đã lỗi thời, nhưng cũng không thể áp dụng nguyên trạng mô hình công – nông của hơn một thế kỷ trước.",
      "Thông điệp đúc kết của nhóm được khái quát ngắn gọn:",
      "KẾ THỪA NGUYÊN TẮC – KHÔNG SAO CHÉP MÔ HÌNH"
    ],
    keyPoints: [
      {
        title: "Những giá trị tiếp tục kế thừa",
        desc: "Tập hợp các lực lượng xã hội; Liên minh dựa trên lợi ích thống nhất; Hài hòa lợi ích; Tạo nền tảng xã hội rộng lớn; Hướng tới mục tiêu chung."
      },
      {
        title: "Những nội dung vận dụng & phát triển",
        desc: "Không giới hạn ở 2 giai cấp; Củng cố liên minh Công-Nông-Trí; Phát huy vai trò Doanh nhân & các lực lượng khác; Linh hoạt hình thức liên kết."
      }
    ]
  },
  {
    id: 12,
    title: "12. Sinh viên có vai trò gì trong Liên minh Xã hội?",
    subtitle: "Trí thức tương lai & Nguồn nhân lực kết nối xã hội",
    badgeText: "Mục 12",
    summaryText: "Sinh viên là nguồn nhân lực tương lai, tham gia liên minh xã hội qua phát triển chuyên môn, năng lực hợp tác liên ngành và giải quyết bài toán thực tế.",
    contentParagraphs: [
      "Sinh viên hiện nay chính là lực lượng lao động, trí thức, nhà quản lý hoặc doanh nhân trong tương lai.",
      "Sinh viên không đứng ngoài vấn đề liên minh xã hội mà chính là nguồn nhân lực chủ lực tham gia vào quá trình phát triển đất nước qua các hành động thiết thực:"
    ],
    keyPoints: [
      {
        title: "Nâng cao Chuyên môn & Công nghệ",
        desc: "Nắm vững tri thức hiện đại, năng lực số và tư duy đổi mới sáng tạo."
      },
      {
        title: "Tăng cường Hợp tác Liên ngành",
        desc: "Khả năng làm việc, thấu hiểu và phối hợp đa dạng giữa các nhóm nghề nghiệp."
      },
      {
        title: "Gắn Tri thức với Thực tiễn",
        desc: "Đưa giải pháp khoa học - công nghệ giải quyết bài toán thực tế của địa phương và xã hội."
      },
      {
        title: "Tạo giá trị cho Cộng đồng",
        desc: "Cống hiến tài năng vì sự phát triển chung của cộng đồng và đất nước."
      }
    ],
    interactiveType: 'student_hub'
  },
  {
    id: 13,
    title: "13. Kết luận",
    subtitle: "Tổng kết toàn bộ đề tài nghiên cứu",
    badgeText: "Mục 13",
    summaryText: "Tư tưởng liên minh giai cấp của Lênin vẫn còn nguyên giá trị nguyên tắc cơ bản. Việt Nam đã vận dụng sáng tạo lấy Công-Nông-Trí làm nền tảng, phát huy toàn bộ khối Đại đoàn kết toàn dân tộc.",
    contentParagraphs: [
      "Tư tưởng liên minh giai cấp của Lênin vẫn còn phù hợp với Việt Nam hiện nay về những nguyên tắc cơ bản, nhưng cần được vận dụng sáng tạo thay vì áp dụng nguyên trạng.",
      "Trong bối cảnh thời Lênin, liên minh công – nông là yêu cầu quan trọng để giai cấp công nhân mở rộng cơ sở xã hội, giành và duy trì chính quyền.",
      "Ngày nay, cơ cấu xã hội Việt Nam đã đa dạng hơn, với vai trò ngày càng rõ của trí thức, doanh nhân và nhiều lực lượng xã hội khác. Vì vậy, phạm vi và hình thức tập hợp lực lượng cũng cần được phát triển linh hoạt.",
      "Trong điều kiện Việt Nam, liên minh công nhân – nông dân – trí thức giữ vai trò nền tảng, đồng thời phát huy vai trò của doanh nhân và các giai cấp, tầng lớp khác trong khối đại đoàn kết toàn dân tộc."
    ],
    keyPoints: [
      {
        title: "Hạt nhân tư tưởng",
        desc: "Giữ vững nguyên tắc tập hợp lực lượng xã hội & hài hòa lợi ích."
      },
      {
        title: "Hành động thực tiễn",
        desc: "Xây dựng đất nước phồn vinh, hạnh phúc dựa trên Khối Đại đoàn kết toàn dân tộc."
      }
    ]
  }
];

export const REFERENCE_SOURCES: ReferenceSource[] = [
  {
    id: 1,
    title: "Giáo trình Chủ nghĩa xã hội khoa học (2021)",
    description: "Tài liệu giảng dạy chuẩn mực của Bộ Giáo dục và Đào tạo về lý luận liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội.",
    badge: "Bộ GD&ĐT"
  },
  {
    id: 2,
    title: "Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam",
    description: "Bài viết: 'Chủ nghĩa Mác - Lênin về liên minh giai cấp, tầng lớp trong cách mạng XHCN – Giá trị và những nội dung cần bổ sung, phát triển'.",
    url: "https://mattran.org.vn/",
    badge: "MTTQ Việt Nam"
  },
  {
    id: 3,
    title: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển 2011)",
    description: "Văn kiện nền tảng khẳng định liên minh công nhân – nông dân – trí thức là nền tảng của khối đại đoàn kết toàn dân tộc.",
    url: "https://tulieuvankien.dangcongsan.vn/",
    badge: "Văn kiện Đảng 2011"
  },
  {
    id: 4,
    title: "Văn kiện Đại hội Đảng hiện hành về Đại đoàn kết toàn dân tộc",
    description: "Văn kiện cập nhật chỉ đạo giải quyết hài hòa lợi ích giữa các giai cấp, tầng lớp và phát huy vai trò đội ngũ doanh nhân, trí thức.",
    url: "https://tulieuvankien.dangcongsan.vn/",
    badge: "Văn kiện Đại hội"
  }
];

export const COMPARISON_DATA = [
  {
    criterion: "Tập hợp các lực lượng xã hội",
    leninVal: "Liên minh công nhân và nông dân rộng lớn để tránh bị cô lập.",
    vietnamApp: "Liên minh Công nhân – Nông dân – Trí thức & các tầng lớp xã hội khác.",
    assessment: "Còn phù hợp",
    status: "success"
  },
  {
    criterion: "Cơ sở xây dựng liên minh",
    leninVal: "Dựa trên các lợi ích cơ bản có thể thống nhất giữa các giai cấp.",
    vietnamApp: "Giải quyết & hài hòa lợi ích giữa các giai cấp, tầng lớp trong nền kinh tế thị trường.",
    assessment: "Còn phù hợp",
    status: "success"
  },
  {
    criterion: "Mục tiêu cơ sở xã hội",
    leninVal: "Xây dựng cơ sở xã hội rộng lớn để giành, giữ và bảo vệ chính quyền vô sản.",
    vietnamApp: "Phát huy Khối Đại đoàn kết toàn dân tộc vì mục tiêu 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
    assessment: "Còn phù hợp",
    status: "success"
  },
  {
    criterion: "Mô hình liên minh cụ thể",
    leninVal: "Mô hình liên minh 2 giai cấp Công nhân ↔ Nông dân thời kỳ đầu cách mạng.",
    vietnamApp: "Xác định Công nhân – Nông dân – Trí thức là NỀN TẢNG của khối đại đoàn kết.",
    assessment: "Được phát triển",
    status: "warning"
  },
  {
    criterion: "Phạm vi & Lực lượng tham gia",
    leninVal: "Giai cấp công nhân giữ vai trò lãnh đạo liên minh với giai cấp nông dân đông đảo.",
    vietnamApp: "Xuất hiện & phát huy vai trò quan trọng của Doanh nhân, Trí thức, Lao động kỹ thuật số.",
    assessment: "Cần vận dụng linh hoạt",
    status: "info"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Theo V.I. Lênin, tại sao giai cấp công nhân bắt buộc phải liên minh với giai cấp nông dân?",
    options: [
      "A. Vì nông dân có trình độ học vấn cao nhất trong xã hội.",
      "B. Vì công nhân không chiếm đa số dân cư, nếu không liên minh sẽ bị cô lập và không giữ được chính quyền.",
      "C. Vì giai cấp nông dân nắm toàn bộ tư liệu sản xuất công nghiệp.",
      "D. Vì giai cấp công nhân không có khả năng lãnh đạo cách mạng."
    ],
    correctAnswer: 1,
    explanation: "Ở Nga thời Lênin, công nhân chiếm tỉ lệ nhỏ. Liên minh với nông dân (lực lượng rất đông đảo) giúp công nhân mở rộng cơ sở xã hội và tránh bị cô lập."
  },
  {
    id: 2,
    question: "Nền tảng của khối Đại đoàn kết toàn dân tộc ở Việt Nam hiện nay bao gồm những lực lượng nào?",
    options: [
      "A. Chỉ gồm giai cấp công nhân và giai cấp nông dân.",
      "B. Giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức.",
      "C. Giai cấp công nhân, đội ngũ doanh nhân và các nhà đầu tư nước ngoài.",
      "D. Đội ngũ trí thức và đội ngũ doanh nhân."
    ],
    correctAnswer: 1,
    explanation: "Việt Nam xác định liên minh giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức là nền tảng của khối đại đoàn kết toàn dân tộc."
  },
  {
    id: 3,
    question: "Trong dự án Nông nghiệp công nghệ cao, đội ngũ trí thức đóng vai trò gì?",
    options: [
      "A. Trực tiếp thu hoạch nông sản và bao tiêu đầu ra.",
      "B. Nghiên cứu giống mới, ứng dụng khoa học công nghệ, chuyển giao giải pháp số.",
      "C. Vận tải hàng hóa và làm thủ tục hải quan xuất khẩu.",
      "D. Đầu tư vốn kinh doanh và xây dựng thương hiệu."
    ],
    correctAnswer: 1,
    explanation: "Trí thức giữ vai trò R&D, nghiên cứu giống cây trồng, quy trình canh tác và cung cấp giải pháp công nghệ số cho nông nghiệp."
  },
  {
    id: 4,
    question: "Khái quát quan điểm của nhóm về vận dụng tư tưởng Lênin là gì?",
    options: [
      "A. Giữ nguyên mô hình liên minh công - nông thời Lênin.",
      "B. Bỏ hẳn tư tưởng Lênin vì cơ cấu xã hội đã thay đổi hoàn toàn.",
      "C. Kế thừa nguyên tắc – Không sao chép mô hình.",
      "D. Thay thế liên minh công - nông bằng liên minh doanh nhân - trí thức."
    ],
    correctAnswer: 2,
    explanation: "Nhóm nhấn mạnh: Kế thừa nguyên tắc tập hợp lực lượng và hài hòa lợi ích từ Lênin, nhưng không sao chép nguyên trạng mô hình lịch sử."
  },
  {
    id: 5,
    question: "Sinh viên có thể đóng góp vào khối liên minh xã hội hiện nay bằng cách nào?",
    options: [
      "A. Học tập nâng cao chuyên môn, tăng cường hợp tác liên ngành và gắn kiến thức với nhu cầu thực tiễn.",
      "B. Chỉ tập trung vào lý thuyết sách vở mà không quan tâm đến xã hội.",
      "C. Chờ đợi sau khi tốt nghiệp mới cần quan tâm đến trách nhiệm xã hội.",
      "D. Tự làm việc độc lập và tránh hợp tác với các nhóm ngành khác."
    ],
    correctAnswer: 0,
    explanation: "Sinh viên là nguồn nhân lực tương lai, cống hiến bằng tri thức chuyên môn, công nghệ và khả năng kết nối đa ngành."
  }
];
