import { ReactComponent as IconoSvgFc1 } from '../../assets/svg/icon_A_V.svg';
import { ReactComponent as IconoSvgFc2 } from '../../assets/svg/icon_C_C_C.svg';
import { ReactComponent as IconoSvgFc3 } from '../../assets/svg/icon_C_E.svg';
import { ReactComponent as IconoSvgFc4 } from '../../assets/svg/icon_C_E_S.svg';
import { ReactComponent as IconoSvgFc5 } from '../../assets/svg/icon_C_S.svg';
import { ReactComponent as IconoSvgFc6 } from '../../assets/svg/icon_C_T.svg';


const Verificador = ({ facultad }) => {
    let SVG;
    switch (facultad) {
        case '01':
            SVG = <IconoSvgFc1/>;
            break;
        case '02':
            SVG = <IconoSvgFc2/>;
            break;
        case '03':
            SVG = <IconoSvgFc5/>;
            break;
        case '04':
            SVG = <IconoSvgFc4/>;
            break;
        case '07':
            SVG = <IconoSvgFc3/>;
            break;
        case '05':
            SVG = <IconoSvgFc6/>;
            break;
        default:
            SVG = null;
    }

    return (
        <div className="card_image">
            {SVG}
        </div>
    );
};

export default Verificador;
