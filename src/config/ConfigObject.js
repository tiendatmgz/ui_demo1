
const getConfigNav = () => {
    return (
        [
            { name: 'services', path: '/services', position: 'left' },
            { name: 'work', path: '/work', position: 'left' },
            { name: 'company', path: '/company', position: 'left' },
            { name: 'careers', path: '/careers', position: 'left' },
        ]
    );
}

const getContents = () => {
    return (
        [
            {
                id: '01',
                title: 'Phong cách tối giản trong thời trang hiện đại',
                subTitle: 'Vẻ đẹp tinh tế và bền vững của sự đơn giản trong thời trang',
                paragraphs: [
                    'Phong cách tối giản, hay còn gọi là “minimalism,” đã và đang trở thành một trong những xu hướng nổi bật nhất trong thời trang hiện đại. Sự trỗi dậy của phong cách này không chỉ là một phản ứng đối với xã hội tiêu dùng mà còn là một phong trào hướng đến sự tinh giản, giảm thiểu những gì không cần thiết. Những gam màu trung tính như trắng, đen, xám, be và nâu đã tạo nên dấu ấn mạnh mẽ của phong cách này, giúp người mặc trở nên thanh lịch và cuốn hút mà không cần quá nhiều chi tiết cầu kỳ. Các bộ trang phục tối giản thường có thiết kế đơn giản với ít họa tiết, chú trọng vào chất liệu cao cấp, đường cắt tinh xảo và kiểu dáng chuẩn xác. Những yếu tố này tạo nên sự hài hòa và sang trọng, khiến phong cách tối giản không chỉ là một xu hướng mà còn là một tuyên ngôn thời trang của những người yêu thích vẻ đẹp bền vững, ít bị tác động bởi sự thay đổi của thời trang nhanh.',
                    
                    'Những người chọn phong cách tối giản thường là những người có xu hướng sống đơn giản và có cái nhìn tinh tế về cuộc sống. Đối với họ, thời trang tối giản không chỉ là về trang phục mà còn là cách để truyền tải lối sống và tư duy của họ. Chính vì thế, những món đồ tối giản thường mang giá trị vượt thời gian, có thể sử dụng qua nhiều mùa mà vẫn không lỗi mốt. Một chiếc áo sơ mi trắng với kiểu dáng đơn giản, hay một chiếc quần âu màu đen với đường cắt vừa vặn là những món đồ cơ bản trong tủ đồ tối giản. Những trang phục này có thể dễ dàng phối hợp với các món đồ khác, tạo ra nhiều phong cách khác nhau từ trang phục hàng ngày cho đến các sự kiện trang trọng. Điều này cũng giúp giảm bớt việc mua sắm không cần thiết, góp phần bảo vệ môi trường và khuyến khích lối sống bền vững.',

                    'Không chỉ có tác động mạnh mẽ đến người tiêu dùng, phong cách tối giản cũng ảnh hưởng sâu rộng đến các nhà thiết kế và thương hiệu thời trang. Rất nhiều thương hiệu nổi tiếng như Uniqlo, COS hay Everlane đã chọn phong cách tối giản làm định hướng chính cho các bộ sưu tập của mình. Họ tập trung vào các thiết kế thanh lịch, bền vững và dễ phối hợp. Trong các bộ sưu tập này, điểm nhấn không phải là sự phô trương, mà chính là những chi tiết nhỏ được chăm chút tỉ mỉ, từ đường may cho đến chất liệu cao cấp. Các bộ sưu tập tối giản không có quá nhiều chi tiết phức tạp nhưng vẫn thể hiện được sự tinh tế và đẳng cấp, tạo cảm giác thoải mái và tự tin cho người mặc.',

                    'Phong cách tối giản còn có sức ảnh hưởng lớn nhờ tính ứng dụng cao. Người mặc không cần nhiều quần áo nhưng vẫn có thể tạo nên nhiều phong cách khác nhau, từ năng động, thanh lịch cho đến sang trọng. Đây cũng là một trong những lý do phong cách tối giản được ưa chuộng bởi những người thường xuyên di chuyển và những người sống ở các thành phố lớn. Với cuộc sống bận rộn và không gian lưu trữ hạn chế, việc sở hữu một tủ đồ tối giản, ít nhưng chất lượng, là sự lựa chọn lý tưởng.',
                    'Ngoài ra, thời trang tối giản cũng được ưa chuộng bởi những người quan tâm đến thời trang bền vững. Các thương hiệu thời trang tối giản thường sản xuất với số lượng nhỏ, giảm thiểu lượng rác thải và ít gây ảnh hưởng đến môi trường. Những người theo đuổi phong cách này cũng thường có xu hướng sử dụng lâu dài các món đồ của mình và không bị cuốn vào những xu hướng thời trang nhanh. Đây là một phong cách phản ánh một tư duy sống chậm, ít tiêu thụ và tập trung vào chất lượng hơn là số lượng.',
                ]
            },
            {
                id: '02',
                title: 'Thời trang bền vững – Sự thay đổi cần thiết trong ngành công nghiệp thời trang',
                subTitle: 'Từ trách nhiệm đến xu hướng của tương lai',
                paragraphs: [
                    'Thời trang bền vững, hay còn gọi là “sustainable fashion,” đang ngày càng trở thành một chủ đề quan trọng không chỉ đối với những người yêu thích thời trang mà còn với tất cả những ai quan tâm đến môi trường. Với những thách thức môi trường mà thế giới đang phải đối mặt, thời trang bền vững đã vượt qua khỏi giới hạn của một xu hướng nhất thời và trở thành trách nhiệm của toàn ngành công nghiệp thời trang. Điều này đặc biệt cần thiết khi ngành công nghiệp thời trang là một trong những ngành gây ô nhiễm lớn nhất thế giới, với lượng khí thải carbon khổng lồ, sử dụng nước không kiểm soát và lượng rác thải vải sợi ngày càng tăng.',
                    'Các thương hiệu thời trang lớn đang nhận thức được sự cần thiết của việc chuyển đổi sang mô hình bền vững. Từ những “ông lớn” như Stella McCartney, Patagonia, cho đến các thương hiệu mới nổi, việc sản xuất thân thiện với môi trường đang là một phần của chiến lược kinh doanh dài hạn. Họ đã bắt đầu sử dụng các chất liệu thân thiện như bông hữu cơ, tơ tre, nhựa tái chế, và vải tái chế từ các sản phẩm cũ. Quy trình sản xuất cũng được kiểm soát chặt chẽ nhằm giảm thiểu lượng khí thải và tối ưu hóa việc sử dụng tài nguyên. Điều này không chỉ giúp giảm tác động xấu đến môi trường mà còn làm tăng giá trị thương hiệu trong mắt người tiêu dùng có ý thức cao về môi trường.',

                    'Người tiêu dùng ngày nay, đặc biệt là thế hệ trẻ như Gen Z và Millennials, ngày càng nhận thức rõ hơn về tác động của thời trang đối với môi trường. Họ không chỉ quan tâm đến việc sản phẩm có đẹp hay không, mà còn cân nhắc xem sản phẩm có được sản xuất một cách có trách nhiệm không. Các sản phẩm thời trang bền vững được tạo ra với mục đích có thể sử dụng lâu dài và ít bị lỗi mốt. Điều này giúp giảm thiểu việc mua sắm quá nhiều, một hành vi tiêu dùng dễ dẫn đến lãng phí và ảnh hưởng xấu đến môi trường.',
                    'Thời trang bền vững không chỉ là một thay đổi về sản phẩm mà còn là một cuộc cách mạng về tư duy tiêu dùng. Những người ủng hộ thời trang bền vững luôn khuyến khích việc mua sắm có trách nhiệm, ưu tiên chất lượng thay vì số lượng. Đây là cách tiếp cận giúp thay đổi thói quen tiêu dùng và cũng là một động lực để các thương hiệu lớn thay đổi phương thức sản xuất. Bằng cách lựa chọn thời trang bền vững, người tiêu dùng không chỉ đóng góp vào việc bảo vệ môi trường mà còn gửi đi một thông điệp mạnh mẽ đến các thương hiệu rằng họ cần thay đổi.',
                ]
            },
            {
                id: '03',
                title: 'Xu hướng thời trang công sở – Sự kết hợp hài hòa giữa truyền thống và hiện đại',
                subTitle: 'Sự giao thoa giữa phong cách cá nhân và sự chuyên nghiệp',
                paragraphs: [

                    'Thời trang công sở đã trải qua một cuộc cách mạng lớn, thay đổi hoàn toàn những quy tắc nghiêm ngặt trong trang phục làm việc. Nếu trước đây, trang phục công sở chỉ xoay quanh những bộ vest cổ điển và váy công sở truyền thống, thì ngày nay, người đi làm có rất nhiều sự lựa chọn mới mẻ, kết hợp hài hòa giữa sự nghiêm túc và yếu tố cá nhân. Những bộ trang phục công sở hiện đại không chỉ đáp ứng được nhu cầu chuyên nghiệp mà còn thể hiện phong cách riêng của từng người.',
                    'Áo sơ mi, một món đồ truyền thống không thể thiếu, giờ đây cũng được “tái sinh” với nhiều kiểu dáng sáng tạo.Những chiếc áo sơ mi truyền thống giờ đã có thêm các chi tiết nhấn nhá như cổ áo nơ, tay áo phồng hoặc kiểu dáng suông hiện đại, tạo nên một cái nhìn tươi mới cho trang phục công sở.Ngoài ra, các kiểu quần âu cũng đã phá bỏ giới hạn của kiểu dáng cổ điển, thay vào đó là những mẫu quần culottes, quần cạp cao hay quần ống rộng, tạo nên vẻ thanh thoát, thoải mái cho người mặc.',

                    'Chất liệu sử dụng trong thời trang công sở hiện đại cũng có sự thay đổi đáng kể.Những loại vải như linen, cotton, và polyester tái chế đang trở thành lựa chọn phổ biến nhờ tính chất thoáng mát và thân thiện với môi trường.Điều này giúp người mặc luôn cảm thấy dễ chịu, đặc biệt trong những ngày làm việc dài.Các thiết kế blazer oversized và áo khoác nhẹ với các chi tiết hiện đại cũng rất được ưa chuộng, giúp hoàn thiện vẻ ngoài chuyên nghiệp nhưng vẫn rất thời trang.',

                    'Thời trang công sở hiện đại không còn là sự bắt buộc phải tuân thủ các chuẩn mực cố định, mà giờ đây là sự kết hợp giữa truyền thống và phong cách cá nhân.Những người làm việc trong môi trường văn phòng có thể linh hoạt lựa chọn các trang phục theo phong cách và sở thích riêng mà vẫn đảm bảo sự chuyên nghiệp cần thiết.Xu hướng này không chỉ thay đổi cách nhìn nhận về thời trang công sở mà còn phản ánh sự thay đổi trong cách làm việc hiện đại, nơi sáng tạo và cá tính được tôn vinh.',
                ]
            },
        ]
    )
}
export { getConfigNav, getContents } 