import styled from "styled-components";
import { Button } from "../global";
import Header from "../global/Header";
import { useNavigate } from "react-router-dom";

export default function Service() {
  const HTML = `
<pre
style="
white-space: pre-wrap;
font-family: Pretendard;
color: #808080;
font-size: 13px;
word-break: keep-all;
"
>
제 1장. 총칙

제 1조 (목적)

투두몰 서비스 약관(이하 “본 약관”)은 마이플랜잇이 제공하는 모바일 기기를 통해 제공하는 서비스 및 이에 부수하는 네트워크, 웹사이트, 기타 서비스(이하 “서비스”)를 이용함에 있어 회원과 회사 간의 권리, 의무, 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.




제 2조 (정의)

(1) 본 약관의 용어 정의는 다음 각 호와 같습니다.
    1. 회사 : “마이플랜잇”을 의미하며, 서비스를 제공하는 사업자를 의미합니다.
    2. 회원 : 이 약관에 따라 이용계약을 체결하고, 회사가 제공하는 서비스를 이용하는 자를 의미합니다.
    3. 모바일기기 : 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는 기기로서, 휴대폰, 스마트폰, 태블릿 등을 의미합니다.
    4. 콘텐츠 : 모바일 기기로 이용할 수 있도록 회사가 서비스 제공과 관련하여 디지털 방식으로 제작한 유료 또는 무료의 내용물 일체를 의미합니다.
    5. 애플리케이션 : 회사가 제공하는 서비스를 이용하기 위하여 모바일 기기를 통해 다운로드 받거나 설치해 사용하는 프로그램 일체를 의미합니다.
    6. 오픈마켓 : 모바일 기기에서 콘텐츠를 다운 받고 결제할 수 있도록 구축된 전자상거래 환경
    7. 회원ID : 회원의 식별과 서비스 이용을 위하여 회원이 신청하고, 회사가 승인한 개인식별정보를 의미합니다.
    8. 비밀번호 : 회원이 부여 받은 회원ID와 일치된 회원임을 확인하고 자신의 비밀 보호를 위해 회원이 설정한 영문 또는 숫자, 특수문자의 조합을 의미합니다.
(2) 본 약관에서 본 조 제 1항에서 정의되지 않은 용어의 의미는 관계 법령 및 서비스별 정책에서 정하는 바에 의하며, 이에 정하지 아니한 것은 일반적인 거래관행을 따릅니다.




제 3조 (회사정보 등의 제공)

회사는 다음 각 호의 사항을 회원이 알아보기 쉽도록 서비스 내에 표시합니다. 다만, 개인정보처리방침과 약관은 회원이 서비스 내 혹은, 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
1. 상호 및 대표자의 성명
2. 영업소 소재지 주소
3. 전자우편주소
4. 사업자 등록번호
5. 개인정보처리방침
6. 서비스 이용약관




제 4조 (약관 외 준칙)

(1) 본 약관은 모든 회원에 대하여 그 효력이 발생합니다.
(2) 회사는 본 약관의 내용을 회원이 알 수 있도록 서비스 내 또는 그 연결화면에 게시합니다. 
(3) 회사는 합리적인 사유가 발생하면 약관의 규제에 관한 법률에 위배되지 않는 범위 안에서 이 약관을 변경 할 수 있으며, 회사가 약관을 변경할 때에는 적용일자와 변경사유를 밝혀 그 적용일자 7일 전부터 서비스 내 또는 그 연결화면에 게시하여 공지합니다. 다만, 변경된 내용이 회원에게 불리하거나 중대한 사항의 변경인 경우에는 그 적용일 30일 이전까지 공지합니다. 이 경우, 개정 전 내용과 개정 후 내용을 명확히 비교해 회원이 알기 쉽도록 표시합니다.
(4) 회사가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다.
(5) 이 약관에 동의하는 것은 정기적으로 서비스에 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원의 피해에 대해 회사는 책임을 지지 않습니다.
(6) 회사가 제3항에 따라 회원에게 약관 변경 적용일까지 거부의사를 표시하지 않으면, 회사는 회원이 변경된 약관에 동의한 것으로 간주합니다.
(7) 변경된 약관에 동의하지 않는 회원은 제24조에 따라 이용계약 해지를 요청할 수 있습니다. 
(8) 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령에 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.





(1) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」, 「공정거래위원회가 정하는 전자상거래등에서의 소비자보호지침 및 관계법령」 등에 따릅니다.
(2) 회사는 필요하면 특정 서비스에 적용될 사항(이하 “개별약관”)을 정하여 서비스 내 또는 그 연결화면 공지할 수 있습니다.
(3) 회사는 필요하면 서비스 이용과 관련된 세부적인 내용(이하 “운영정책”)을 정하여 서비스 내 또는 그 연결화면을 통해 공지할 수 있습니다.
(4) 개별약관이나 운영정책의 변경이 있으면 회사는 변경 내용의 효력발생일 7일 이전에 서비스 내 또는 그 연결화면을 통해 공지할 수 있습니다.




제 6조 (이용계약의 체결 및 적용)

(1) 이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가 이용 신청 양식에 따라 회원정보를 기입한 후, 이 약관의 내용에 대하여 동의한다는 의사표시를 함으로서 서비스 이용을 신청합니다. 회사가 그 신청에 대해서 승낙함으로써 체결됩니다.
(2) 회사는 가입신청자의 신청에 대하여 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호의 어느 하나에 해당하는 이용 신청에 대해서는 승낙을 거절할 수 있습니다.
    1. 이용신청서 내용을 허위로 기재하거나 이용신청 요건을 충족하지 못한 경우
    2. 이미 이용계약을 체결한 회원인 경우
    3. 회사가 서비스를 제공하지 않은 국가에서 비정상적이거나 우회적인 방법을 통해 서비스를 이용하는 경우
    4. 사회의 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청한 경우
    5. 부정한 용도로 서비스를 이용하거나, 영리를 추구할 목적으로 서비스를 이용하고자 하는 경우
    6. 그 밖에 각 호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우
(3) 회사는 다음 각 호의 어느 하나에 해당하는 경우 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
    1. 회사의 설비에 여유가 없거나, 특정 모바일 기기의 지원이 어렵거나, 기술적 장애가 있는 경우
    2. 서비스 상의 장애 또는 서비스 이용요금, 결제수단의 장애가 발생한 경우
    3. 그 밖의 각 호에 준하는 사유로서 이용신청의 승낙이 어렵다고 판단되는 경우




제 7조 (운영 정책)

(1) 회사는 운영정책의 내용을 회원이 알 수 있도록 서비스 내 또는 그 연결화면에 게시합니다.
(2) 운영정책을 개정하는 경우에는 제4조 제3항의 절차에 따릅니다. 다만, 운영정책 개정내용이 다음 각 호의 어느 하나에 해당하는 경우에는 본조 제1항의 방법으로 사전에 공지합니다.
    1. 약관에서 구체적으로 범위를 정하여 위임한 사항을 개정하는 경우
    2. 회원의 권리·의무와 관련 없는 사항을 개정하는 경우
    3. 운영정책의 내용이 약관에서 정한 내용과 근본적으로 다르지 않고 회원이 예측할 수 있는 범위 내에서 운영정책을 개정하는 경우






제2장. 개인정보 관리

제8조 (개인정보의 보호 및 사용)

(1) 회사는 관련 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력하며, 개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사의 개인정보처리방침에 따릅니다. 다만, 회사가 제공하는 서비스 이외의 링크된 서비스에서는 회사의 개인정보처리방침이 적용되지 않습니다.
(2) 회사는 회원의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 해당 회원의 동의를 받습니다. 회원의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원, 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항 등 정보통신망이용촉진등에관한법률 제12조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며, 회원는 언제든지 이 동의를 철회할 수 있습니다.
(3) 회사는 회원의 개인정보는 해당 회원의 동의 없이 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 회사가 집니다. 다만, 각 호의 어느 하나에 해당하는 경우는 아니합니다. 이 때, 회사 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.
    1. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우
    2. 재화 등의 거래에 따른 대금정산을 위하여 필요한 경우
    3. 도용방지를 위하여 본인확인에 필요한 경우
    4. 법률의 규정 또는 법률에 의하여 필요한 불가피한 사유가 있는 경우
    5. 관련 법령에 의해 관련 국가기관 등이 요청을 한 경우
(4) 회원은 언제든지 회사가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 회사는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 
(5) 회사는 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 회원의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 회원의 손해에 대하여 모든 책임을 집니다.
(6) 회사는 회원의 귀책사유로 개인정보가 유출되어 발생한 피해에 대하여 책임을 지지 않습니다.
(7) 서비스의 특성에 따라 회원의 개인정보와 관련이 없는 닉네임‧사진‧상태정보 등 자신을 소개하는 내용이 공개될 수 있습니다.






제3장. 이용계약 당사자의 의무

제9조 (회사의 의무)

(1) 회사는 관련 법령, 이 약관에서 정하는 권리의 행사 및 의무의 이행을 신의에 따라 성실하게 준수합니다.
(2) 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다. 회사는 이 약관 및 개인정보처리방침에서 정한 경우를 제외하고는 회원의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.
(3) 회사는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실․훼손된 때에는 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 장애나 결함 등 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.
(4) 회사는 제29조에 따라 서비스와 관련한 회원의 불만사항을 성실히 처리하도록 노력합니다. 
(5) 회사가 제공하는 서비스로 인하여 회원에게 손해가 발생한 경우, 그러한 손해가 회사의 고의나 중과실에 기해 발생한 경우에 한하여 회사에서 책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다.
(6) 회사는 정보통신망 이용촉진 및 정보보호에 관한 법률, 통신비밀보호법, 전기통신사업법 등 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.




제10조 (회원의 의무)

(1) 회원은 회사에서 제공하는 서비스의 이용과 관련하여 다음 각 호에 해당하는 행위를 해서는 안 됩니다. 각 호에 해당하는 행위를 한 경우, 회사는 제18조에 따라 회원의 서비스 이용을 제한 또는 중지 할 수 있습니다.
    1. 이용신청 또는 회원 정보 변경 시 허위사실을 기재하는 행위
    2. 회사의 직원이나 타인으로 가장하거나 타인의 명의를 도용하는 행위
    3. 타인의 신용카드⋅유/무선 전화⋅은행 계좌 등을 도용하여 유료 콘텐츠를 구매하는 행위, 다른 회원의 ID 및 비밀번호를 부정사용하는 행위
    4. 다른 회원의 개인정보를 무단으로 수집⋅저장⋅게시 또는 유포하는 행위
    5. 서비스 및 콘텐츠를 무단으로 영리, 영업, 광고, 홍보, 정치활동, 선거운동 등 본래의 용도 이외의 용도로 이용하는 행위
    6. 회사의 서비스 및 콘텐츠를 이용하여 얻은 정보를 무단으로 복제․유통․조장하거나 상업적으로 이용하는 행위, 알려지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위
    7. 타인을 기망하여 이득을 취하는 행위, 회사의 서비스의 이용과 관련하여 타인에게 피해를 입히는 행위
    8. 회사나 타인의 지적재산권 또는 초상권을 침해하는 행위, 타인의 명예를 훼손하거나 손해를 가하는 행위
    9. 법령에 의하여 전송 또는 게시가 금지된 정보(컴퓨터 프로그램)나 컴퓨터 소프트웨어⋅하드웨어 또는 전기통신장비의 정상적인 작동을 방해⋅파괴할 목적으로 고안된 바이러스⋅컴퓨터 코드⋅파일⋅프로그램 등을 고의로 전송⋅게시⋅유포 또는 사용하는 행위
    10. 회사로부터 특별한 권리를 부여 받지 않고 애플리케이션을 변경하거나, 애플리케이션에 다른 프로그램을 추가⋅삽입하거나, 서버를 해킹⋅역설계하거나, 소스 코드나 애플리케이션 데이터를 유출⋅변경하거나, 별도의 서버를 구축하거나, 웹사이트의 일부분을 임의로 변경⋅도용하여 회사를 사칭하는 행위
    11. 그 밖에 관련 법령에 위반되거나 선량한 풍속 기타 사회통념에 반하는 행위
(2) 회원의 계정 및 모바일 기기에 관한 관리 책임은 회원에게 있으며, 이를 타인이 이용하도록 하게 하여서는 안 됩니다. 모바일 기기의 관리 부실이나 타인에게 이용을 승낙함으로 인해 발생하는 손해에 대해서 회사는 책임을 지지 않습니다.
(3) 회원은 각 오픈마켓에서 부정한 결제가 이루어지지 아니하도록 결제 비밀번호 기능을 설정하고 관리하여야 합니다. 회원의 부주의로 인하여 발생하는 손해에 대해 회사는 책임지지 않습니다
(4) 회사는 다음 각 호의 행위의 구체적인 내용을 정할 수 있으며, 회원은 이를 따라야 합니다.
    1. 서비스 이용 방법
    2. 회원의 계정명, 서비스 내에서 사용하는 명칭
    3. 카카오, 페이스북 등 외부 모바일 플랫폼 제휴 서비스 정책
(5) 서비스의 회원 ID 및 비밀번호 관리 책임은 회원에게 있습니다. 회원은 본인의 회원 ID 및 비밀번호를 제3자에게 이용하게 해서는 안되며, 회원 본인의 회원 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지하는 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우 그에 따라야 합니다.




(1) 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며, 회사는 요청을 받은 즉시 회원탈퇴를 처리합니다.
(2) 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을 일정 기간 동안 제한 및 정지시킬 수 있습니다. 이 경우 회원에게 사유와 기간을 통지합니다.
1. 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
2. 서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
(3) 회사가 회원 자격을 제한, 정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.
(4) 회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 사유와 함께 통지합니다.
(5) 회원자격의 제한, 정지 및 상실과 관련해 발생한 손해에 대해서는 자신의 귀책사유로 자격에 변동이 일어난 당해 회원이 책임을 져야 하고, 회사는 귀책사유가 없는 한 책임을 지지 않습니다.


제4장. 서비스 이용 및 이용 제한

제11조 (서비스의 제공)

(1) 회사는 제6조의 규정에 따라 이용계약이 완료된 회원에게 그 즉시 서비스를 이용할 수 있도록 합니다. 다만, 일부 서비스의 경우 회사의 필요에 따라 지정된 일자부터 서비스를 개시할 수 있습니다.
(2) 회원은 회원 자격이 유지되는 기간 동안 서비스를 이용할 수 있습니다.
(3) 회사는 회원에게 서비스를 제공할 때 이 약관에 정하고 있는 서비스를 포함하여 기타 부가적인 서비스를 함께 제공할 수 있습니다.




제12조 (서비스의 이용)

(1) 회사는 다음 각 호의 경우에는 서비스의 전부 또는 일부를 일시 정지할 수 있습니다. 이 경우 회사는 사전에 그 정지의 사유와 기간을 애플리케이션 초기화면이나 서비스 공지사항 등에 공지합니다. 다만, 사전에 공지할 수 없는 부득이한 사정이 있는 경우 사후에 공지할 수 있습니다.
    1. 시스템 정기점검, 서버의 증설 및 교체, 네트워크의 불안정 등의 시스템 운영상 필요한 경우
    2. 정전, 서비스 설비의 장애, 서비스 이용폭주, 기간통신사업자의 설비 보수 또는 점검 등으로 인하여 정상적인 서비스 제공이 불가능한 경우
    3. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태 등 회사가 통제할 수 없는 상황이 발생한 경우
(2) 회사는 모바일 기기를 위한 전용 애플리케이션 또는 네트워크를 이용하여 서비스를 제공합니다. 회원은 애플리케이션을 다운로드하여 설치하거나 네트워크를 이용하여 무료 또는 유료로 서비스를 이용할 수 있습니다.
(3) 유료 콘텐츠의 경우에는 해당 서비스에 명시된 요금을 지급하여야 이용할 수 있습니다. 네트워크를 통해 애플리케이션을 다운로드하거나 서비스를 이용하는 경우에는 가입한 이동통신사에서 정한 별도의 요금이 발생할 수 있습니다.
(4) 다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는 서비스의 경우에는 모바일 기기 또는 이동통신사의 특성에 맞도록 제공됩니다. 모바일 기기의 변경․번호 변경 또는 해외 로밍의 경우에는 콘텐츠의 전부 또는 일부의 이용이 불가능할 수 있으며, 이 경우 회사는 책임을 지지 않습니다.
(5) 다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는 서비스의 경우에는 백그라운드 작업이 진행될 수 있습니다. 이 경우 모바일 기기 또는 이동통신사의 특성에 맞도록 추가요금이 발생할 수 있으며 이와 관련하여 회사는 책임을 지지 않습니다.




제13조 (서비스의 변경 및 중단)

(1) 회사는 원활한 서비스 제공을 위해 운영상 또는 기술상의 필요에 따라 서비스를 변경할 수 있으며, 변경 전에 해당 내용을 서비스 내에 공지합니다. 다만, 버그․오류 등의 수정이나 긴급 업데이트 등 부득이하게 변경할 필요가 있는 경우 또는 중대한 변경에 해당하지 않는 경우에는 사후에 공지할 수 있습니다.
(2) 회사는 영업양도․분할․합병 등에 따른 영업의 폐지, 콘텐츠 제공의 계약만료, 당해 서비스의 현저한 수익 악화 등 경영상의 중대한 사유로 인해 서비스를 지속하기 어려운 경우에는 서비스 전부를 중단할 수 있습니다. 이 경우 중단일자 30일 이전까지 중단일자․ 중단사유․ 보상조건 등을 애플리케이션 초기화면 또는 그 연결화면을 통해 공지하고 제27조 제1항의 방법으로 회원에게 통지합니다.
(3) 제2항의 경우 회사는 사용하지 않았거나 사용기간이 남아 있는 유료 콘텐츠에 대해 제24조 제3항에 따라 환급합니다.




제14조 (정보의 수집 등)

(1) 회사는 서비스의 원활하고 안정적인 운영 및 서비스 품질의 개선을 위하여 회원의 모바일 기기 정보(설정, 사양, 운영체제, 버전 등)를 수집 ‧ 활용할 수 있습니다.
(2) 회사는 서비스 개선 및 회원 대상 서비스 소개 등을 위한 목적으로 회원에게 추가정보를 요청할 수 있습니다. 이 요청에 대해 회원은 승낙하거나 거절할 수 있으며, 회사가 이 요청을 할 경우에는 회원이 이 요청을 거절할 수 있다는 뜻을 함께 고지합니다.
(3) 회사는 회원의 개인정보를 특정 개인을 알아볼 수 없는 형태로 가공하여 통계자료로 사용할 수 있고, 이를 위하여 회원의 컴퓨터에 쿠키를 전송할 수 있습니다. 이 경우 회원은 쿠키의 수신을 거부하거나 쿠키의 수신에 대하여 경고하도록 사용하는 컴퓨터의 브라우저의 설정을 변경할 수 있으며, 쿠키의 설정 변경에 의해 서비스 이용이 변경되는 것은 회원의 책임입니다.




제15조 (광고의 제공)

(1) 회사는 서비스의 운영과 관련하여 서비스 내에 광고를 게재할 수 있습니다. 또한 수신에 동의한 회원에 한하여 전자우편, 문자서비스(LMS/SMS), 푸시메시지(Push Notification) 등의 방법으로 광고성 정보를 전송할 수 있습니다. 이 경우 회원은 언제든지 수신을 거절할 수 있으며, 회사는 회원의 수신 거절 시 광고성 정보를 발송하지 아니합니다.
(2) 회사가 제공하는 서비스 중의 배너 또는 링크 등을 통해 타인이 제공하는 광고나 서비스에 연결될 수 있습니다.
(3) 제2항에 따라 타인이 제공하는 광고나 서비스에 연결될 경우 해당 영역에서 제공하는 서비스는 회사의 서비스 영역이 아니므로 회사가 신뢰성, 안정성 등을 보장하지 않으며, 그로 인한 회원의 손해에 대하여도 회사는 책임을 지지 않습니다. 다만, 회사가 고의 또는 중과실로 손해의 발생을 용이하게 하거나 손해 방지를 위한 조치를 취하지 아니한 경우에는 그러하지 아니합니다.


제 4장 회사와 회원의 의무


제16조 (저작권 등의 귀속)

(1) 회사가 제공한 서비스 내의 콘텐츠에 대한 저작권과 기타 지적재산권은 회사에 귀속합니다. 
(2) 회원은 회사가 제공하는 서비스를 이용하여 얻은 정보 중에서 회사 또는 제공업체에 지적재산권이 귀속된 정보를 회사 또는 제공업체의 사전 동의 없이 복제⋅전송 등의 방법(편집, 공표, 공연, 배포, 방송, 2차적 저작물 작성 등을 포함합니다. 이하 같습니다)에 의하여 영리목적으로 이용하거나 타인에게 이용하게 하여서는 안 됩니다.
(3) 회원은 서비스와 관련하여 회원 또는 다른 이용자가 애플리케이션 또는 서비스를 통해 업로드 또는 전송하는 텍스트, 이미지 등 모든 자료 및 정보(이하 “이용자 콘텐츠”라 합니다.)에 대하여 회사가 다음과 같은 방법과 조건으로 이용하는 것을 허락합니다.
    1. 해당 이용자 콘텐츠를 이용, 편집 형식의 변경 및 기타 변형하는 것(공표, 복제, 공연, 전송, 배포, 방송, 2차적 저작물 작성 등 어떠한 형태로든 이용 가능하며, 이용기간과 지역에는 제한이 없음)
    2. 이용자 콘텐츠를 제작한 이용자의 사전 동의 없이 거래를 목적으로 이용자 콘텐츠를 판매, 대여, 양도 행위를 하지 않음
(4) 회사는 회원의 이용자 콘텐츠가 제10조 제1항에 따른 금지행위에 해당된다고 판단되는 경우에는 사전 통지 없이 이를 삭제 또는 이동하거나 그 등록을 거절할 수 있습니다.
(5) 이 조는 회사가 서비스를 운영하는 동안 유효하며, 회원 탈퇴 후에도 지속적으로 적용됩니다.



제 13조 (회원 ID와 비밀번호 관리에 대한 의무와 책임)

제17조 (유료 콘텐츠의 구매, 사용기간 및 이용)

(1) 서비스 내에서 회원이 구매한 유료 콘텐츠는 해당 애플리케이션을 다운로드 받거나 설치한 모바일 기기에서만 이용할 수 있습니다.
(2) 회원이 구매한 유료 콘텐츠의 이용기간은 구매 시 명시된 기간에 따릅니다. 다만, 제13조 제2항에 따라 서비스 중단이 이루어지는 경우 기간의 정함이 없는 유료 콘텐츠의 이용기간은 서비스 중단 공지 시 공지된 서비스의 중단일자까지로 합니다.

제 14조 (개인정보보호)



제18조(회원에 대한 서비스 이용제한)

(1) 회원은 제10조에 따른 회원의 의무를 위반하는 행위를 하여서는 안 되며, 해당 행위를 하는 경우에 회사는 다음 각 호의 구분에 따른 회원의 서비스 이용제한, 관련 정보(글, 사진, 영상 등) 삭제 및 기타의 조치를 포함한 이용제한 조치를 할 수 있습니다. 이용제한 조치가 이루어지는 구체적인 사유 및 절차는 제19조 제1항에 따라 정합니다.
    1. 계정 이용제한 : 일정기간 또는 영구히 회원 계정의 이용을 제한
    2. 회원 이용제한 : 일정기간 또는 영구히 회원의 서비스 이용을 제한
(2) 제1항의 이용제한이 정당한 경우에 회사는 이용제한으로 인하여 회원이 입은 손해를 배상하지 않습니다.
(3) 회사는 다음 각 호의 사유에 대한 조사가 완료될 때까지 해당 계정의 서비스 이용을 정지할 수 있습니다.
    1. 계정이 해킹 또는 도용당했다는 정당한 신고가 접수된 경우
    2. 불법프로그램 사용자 또는 작업장 등 위법행위자로 의심되는 경우
    3. 그 밖에 각 호에 준하는 사유로 서비스 이용의 잠정조치가 필요한 경우
(4) 제3항의 조사가 완료된 후, 유료 서비스의 경우에는 정지된 시간만큼 회원의 이용시간을 연장하거나 그에 상당하는 유료서비스 또는 현금 등으로 보상합니다. 다만, 회원이 제3항 각 호의 사유에 해당하는 경우에는 그러하지 아니합니다.



제 5장 저작권, 콘텐츠와 게시물

제19조 (이용제한 조치의 사유와 절차)

(1) 회사는 제18조 제1항에 따른 이용제한 조치의 구체적인 사유 및 절차를 제10조 제1항에 따른 금지행위의 내용, 정도, 횟수, 결과 등을 고려하여 정합니다.
(2) 회사가 제18조 제1항에서 정한 이용제한 조치를 하는 경우에는 다음 각 호의 사항을 회원에게 사전 통지합니다. 다만, 긴급히 조치할 필요가 있는 경우에는 사후에 통지할 수 있습니다.
    1. 이용제한 조치의 사유
    2. 이용제한 조치의 유형 및 기간
    3. 이용제한 조치에 대한 이의신청 방법




제20조 (이용제한 조치에 대한 이의신청 절차)

(1) 회원이 회사의 이용제한 조치에 불복하고자 할 때에는 이 조치의 통지를 받은 날부터 14일 이내에 불복 이유를 기재한 이의 신청서를 서면, 전자우편 또는 이에 준하는 방법으로 회사에 제출하여야 합니다.
(2) 회사는 제1항의 이의신청서를 접수한 날부터 14일 이내에 불복 이유에 대하여 서면, 전자우편 또는 이에 준하는 방법으로 답변합니다. 다만, 회사는 이 기간 내에 답변이 어려운 경우에는 그 사유와 처리일정을 통지합니다.
(3) 회사는 불복 이유가 타당한 경우에는 이에 따른 조치를 취합니다.


제 18조(분쟁해결)




제5장. 청약철회, 과오납금의 환급 및 이용계약의 해지

제 21조 (대금결제)

(1) 콘텐츠에 대한 구매 대금의 부과와 납부는 원칙적으로 이동통신사나 오픈마켓 사업자 등에서 정하는 정책이나 방법에 따릅니다. 또한 각 결제수단별 한도가 회사나 오픈마켓 사업자가 정하는 정책 또는 정부의 방침에 따라 부여되거나 조정될 수 있습니다.
(2) 콘텐츠의 구매대금을 외화로 결제하는 경우에는 환율‧수수료 등으로 인하여 실제 청구금액이 서비스의 상점 등에서 표시된 가격과 달라질 수 있습니다.



제22조 (청약 철회 등)

(1) 회사와 유료 콘텐츠의 구매에 관한 계약을 체결한 회원은 구매계약일로부터 7일 이내에 별도의 수수료‧위약금 등의 부담 없이 청약철회를 할 수 있습니다.
(2) 회원은 다음 각 호에 해당하는 경우에는 회사의 의사에 반하여 제1항에 따른 청약철회를 할 수 없습니다. 다만, 가분적 콘텐츠로 구성된 구매계약의 경우에는 가분적 콘텐츠 중 다음 각 호에 해당하지 아니하는 나머지 부분에 대하여는 그러하지 아니합니다. 가분적 콘텐츠의 청약 철회는 별도 운영 정책을 따릅니다.
    1. 구매 즉시 사용되거나 적용되는 유료 콘텐츠
    2. 개봉행위를 사용으로 볼 수 있거나 개봉 시 효용이 결정되는 콘텐츠의 개봉행위가 있는 경우
    3. 추가혜택이 제공되는 경우에 그 추가 혜택이 사용된 콘텐츠
(3) 회사는 제2항 각 호의 규정에 따라 청약철회가 불가능한 콘텐츠의 경우에는 그 사실을 회원이 쉽게 알 수 있는 곳에 명확하게 표시하고, 해당 콘텐츠의 시험사용 상품을 제공(한시적 이용의 허용, 체험용 제공 등)하거나 이에 대한 제공이 곤란한 경우에는 콘텐츠에 관한 정보 제공함으로써 회원의 청약철회의 권리행사가 방해받지 아니하도록 조치합니다. 만약 회사가 이러한 조치를 하지 아니한 경우에는 제2항 각 호의 청약철회 제한사유에도 불구하고 회원은 청약철회를 할 수 있습니다.
(4) 회원은 제1항 및 제2항에도 불구하고 구매한 유료 콘텐츠의 내용이 표시․광고의 내용과 다르거나 구매계약의 내용과 다르게 이행된 경우에 해당 콘텐츠가 이용 가능하게 된 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회를 할 수 있습니다.
(5) 회원이 청약철회를 할 경우 회사는 플랫폼사업자 또는 오픈마켓 사업자를 통해 구매내역을 확인합니다. 또한 회사는 회원의 정당한 철회 사유를 확인하기 위해 회원에게서 제공받은 정보를 통해 회원에게 연락할 수 있으며, 추가적인 증빙을 요구할 수 있습니다.
(6) 제1항부터 제4항까지의 규정에 따라 청약철회가 이루어질 경우 회사는 지체 없이 회원의 유료 콘텐츠를 회수하고 3영업일 이내에 대금을 환급합니다. 단, 플랫폼사업자 또는 오픈마켓 사업자의 상황에 따라 환급이 최대 7영업일까지 지연될 수 있습니다. 환급 요청일로부터 7영업일이 지난 이후에도, 회사가 환급을 지연한 때에는 그 지연기간에 대하여 「전자상거래 등에서의 소비자보호에 관한 법률」 및 같은 법 시행령 제21조의3에서 정하는 이율을 곱하여 산정한 지연이자를 지급합니다.
(7) 미성년자가 모바일 기기에서 콘텐츠 구매계약을 체결하는 경우, 회사는 법정대리인의 동의가 없으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 고지하며, 미성년자가 법정대리인의 동의 없이 구매계약을 체결한 때에는 미성년자 본인 또는 법정대리인은 회사에 그 계약을 취소할 수 있습니다. 다만, 미성년자가 법정대리인이 범위를 정하여 처분을 허락한 재산으로 콘텐츠를 구매한 경우 또는 미성년자가 속임수로써 자기를 성년자로 믿게 하거나 법정대리인의 동의가 있는 것으로 믿게 한 경우에는 취소할 수 없습니다.
(8) 콘텐츠 구매계약의 당사자가 미성년자인지 여부는 결제가 진행된 모바일 기기, 결제 실행자 정보, 결제 수단 명의자 등을 근거로 판단합니다. 또한 회사는 정당한 취소인지를 확인하기 위해 미성년자 및 법정대리인임을 증명할 수 있는 서류의 제출을 요청할 수 있습니다.




제23조 (과오납금의 환급)

(1) 회사는 과오납금이 발생하는 경우 과오납금을 회원에게 환급합니다. 다만, 과오납금이 회사의 고의 또는 과실 없이 회원의 과실로 인하여 발생한 경우에는 그 환급에 소요되는 실제 비용은 합리적인 범위 내에서 회원이 부담합니다.
(2) 애플리케이션을 통한 결제는 오픈마켓 사업자가 제공하는 결제방식에 따르며, 결제 과정에서  과오납금이 발생하는 경우, 회사 또는 오픈마켓 사업자에게 환급을 요청하여야 합니다.
(3) 애플리케이션의 다운로드 또는 네트워크 서비스의 이용으로 인해 발생한 통신요금(통화료, 데이터 통화료 등)은 환급 대상에서 제외될 수 있습니다.
(4) 환급은 서비스를 이용하고 있는 모바일 기기의 운영체제 종류에 따라 각 오픈마켓 사업자 또는 회사의 환급정책에 따라 진행됩니다.
(5) 회사는 과오납금의 환급을 처리하기 위해 회원에게서 제공받은 정보를 통해 회원에게 연락할 수 있으며, 필요한 정보의 제공을 요청할 수 있습니다. 회사는 회원으로부터 환급에 필요한 정보를 받은 날부터 3영업일 이내에 환급합니다. 단, 플랫폼사업자 또는 오픈마켓 사업자의 상황에 따라 환급이 최대 7영업일까지 지연될 수 있습니다. 




제24조 (계약 해지 등)

(1) 회원은 언제든지 서비스 이용을 원하지 않는 경우 회원 탈퇴를 통해 이용계약을 해지할 수 있습니다. 회원탈퇴로 인해 회원이 서비스 내에서 보유한 이용정보는 모두 삭제되어 복구가 불가능하게 됩니다.
(2) 회사는 회원이 이 약관 및 그에 따른 운영정책, 서비스 정책에서 금지하는 행위를 하는 등 본 계약을 유지할 수 없는 중대한 사유가 있는 경우에는 상당한 기간 전에 최고하고 기간을 정하여 서비스 이용을 중지하거나 이용계약을 해지할 수 있습니다.
(3) 제1항 및 제2항에 따른 환급 및 손해배상은 「콘텐츠이용자보호지침」에 따라 처리합니다.
(4) 회사는 최근의 서비스 이용일부터 연속하여 1년 동안 회사의 서비스를 이용하지 않은 회원(이하 “휴면계정”이라 합니다)의 개인정보를 보호하기 위해 이용계약을 해지하고 회원의 개인정보 파기 등의 조치를 취할 수 있습니다. 이 경우 조치일 30일 전까지 계약해지, 개인정보 파기 등의 조치가 취해진다는 사실 및 파기될 개인정보 등을 회원에게 통지합니다.






제6장. 손해배상 및 면책조항 등

제25조 (손해배상)

(1) 회사 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다. 다만, 고의 또는 과실이 없는 경우에는 그러하지 아니 합니다.
(2) 회사가 개별서비스 제공자와 제휴 계약을 맺고 회원에게 개별서비스를 제공하는 경우에 회원이 이 개별서비스 이용약관에 동의를 한 뒤 개별서비스 제공자의 고의 또는 과실로 인해 회원에게 손해가 발생한 경우에 그 손해에 대해서는 개별서비스 제공자가 책임을 집니다.




제26조 (회사의 면책)

(1) 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관하여 책임을 지지 않습니다.
(2) 회사는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 기타 이에 준하는 사유로 발생한 손해에 대하여 책임을 지지 않습니다. 다만, 회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.
(3) 회사는 회원의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다. 다만, 회원에게 부득이하거나 정당한 사유가 있는 경우에는 그러하지 아니합니다.
(4) 회원이 서비스와 관련하여 게재한 정보나 자료 등의 신뢰성, 정확성 등에 대하여 회사는 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
(5) 회사는 회원이 다른 회원 또는 타인과 서비스를 매개로 발생한 거래나 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해에 대해 책임을 지지 않습니다.
(6) 회사는 무료로 제공되는 서비스 이용과 관련하여 회원에게 발생한 손해에 대해서는 책임을 지지 않습니다. 그러나 회사의 고의 또는 중과실에 의한 경우에는 그러하지 아니합니다.
(7) 회사는 회원이 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.
(8) 회사는 회원의 콘텐츠 손실에 대하여 책임을 지지 않습니다. 다만, 회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.
(9) 회사는 회원이 모바일 기기 비밀번호, 오픈마켓 사업자가 제공하는 비밀번호 등을 관리하지 않아 발생하는 제3자 결제에 대해 책임을 지지 않습니다. 다만, 회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.
(10) 회원이 모바일 기기의 변경, 모바일 기기의 번호 변경, 운영체제(OS) 버전의 변경, 해외 로밍, 통신사 변경 등으로 인해 콘텐츠 전부나 일부의 기능을 이용할 수 없는 경우 회사는 이에 대해 책임을 지지 않습니다. 다만, 회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.
(11) 회원이 회사가 제공하는 콘텐츠나 계정정보를 삭제한 경우 회사는 이에 대해 책임을 지지 않습니다. 다만, 회사의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.




제27조 (회원에 대한 통지)

(1) 회사가 회원에게 통지를 하는 경우 회원의 전자우편주소, 전자메모, 서비스 내 쪽지, 문자메시지(LMS/SMS) 등으로 할 수 있습니다.
(2) 회사는 회원 전체에게 통지를 하는 경우 7일 이상 서비스 내에 게시하거나 팝업화면 등을 제시함으로써 제1항의 통지에 갈음할 수 있습니다.




제28조 (재판권 및 준거법)

(1) 이 약관은 대한민국 법률에 따라 규율되고 해석됩니다. 회사와 회원 간에 발생한 분쟁으로 소송이 제기되는 경우에는 법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.




제29조 (회원의 고충처리 및 분쟁해결)

(1) 회사는 회원의 편의를 고려하여 회원의 의견이나 불만을 제시하는 방법을 서비스 내 또는 그 연결화면에 안내합니다. 회사는 이러한 회원의 의견이나 불만을 처리하기 위한 전담인력을 운영합니다.
(2) 회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 합리적인 기간 내에 이를 신속하게 처리합니다. 다만, 처리에 장기간이 소요되는 경우에는 회원에게 장기간이 소요되는 사유와 처리일정을 서비스 내 공지하거나 제27조 제1항에 따라 통지합니다.
(3) 회사와 회원 간에 분쟁이 발생하여 제3의 분쟁조정기관이 조정할 경우 회사는 이용제한 등 회원에게 조치한 사항을 성실히 증명하고, 조정기관의 조정에 따를 수 있습니다.






부칙

이 약관은 2023년 1월 1일부터 시행합니다.
공고일 : 2023년 1월 1일</pre
>`;
  const navigate = useNavigate();
  const isValid = localStorage.getItem("service");
  const handleAgreeTermofService = () => {
    localStorage.setItem("service", true);
    navigate(-1);
  };

  return (
    <Wrapper>
      <Header title="서비스 이용약관" />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: HTML }} />
      {!isValid && (
        <Button
          title="제출하기"
          color="#ffffff"
          margin="40px 0 50px 0"
          onClick={handleAgreeTermofService}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HTMLDiv = styled.div`
  padding: 60px 16px 0 16px;
`;
