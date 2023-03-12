import {useState} from "react";
import {useForm, Controller } from "react-hook-form";
import InputMask from 'react-input-mask';
import {Link} from "react-router-dom";
import {MdOutlineError} from "react-icons/md"
import {useSelector} from "react-redux";

import {options, required} from "../constants";
import CartOrder from "../components/CartOrder";




// interface IAddress {
//     city: string
//     street: string
//     house: number
// }
//
// interface IShippingFields {
//     name: string
//     phone: number
//     address: IAddress
// }





const Cart = () => {

    const {products, totalSum} = useSelector((state) => state.cart)

    const {
        register,
        control,
        handleSubmit,
        formState: {errors, isValid}, reset } = useForm({
        defaultValues: {
            phone: '',
        },
        mode: "onChange",

    });

    const [orderComplete, setOrderComplete] = useState(true)

    const onSubmit = data => {
        console.log(data)
        reset()
        setOrderComplete(!orderComplete)
    }
    return (
         orderComplete ?
             <form onSubmit={handleSubmit(onSubmit)} >
                <div className="container-cart">
        <section className="checkout">
        <div className="checkout__contacts">
        <h2 className="title">Контакти</h2>
    <div className="item">
        <label><span>Ваше ім'я*</span></label>
        <input placeholder="Введіть ваше ім'я"
               {...register("name",
                   {
                       required: required,
                       minLength: {
                           value: 2,
                           message: "Не меньше 2-х символів",
                       },
                       maxLength: {
                           value: 20,
                           message: "Не більше 20 символів"
                       }
                   })}/>
        {errors?.name && <p className="error">{errors.name.message}</p>}
    </div>
    <div className="item">
        <label><span>Телефон*</span></label>
        <Controller
            name="phone"
            control={control}
            rules={{required: true, pattern: /[+]380\d{9}/}}
            render={({field: {onChange, value}, fieldState: {error}}) => (
                <InputMask
                    mask="+380999999999"
                    onChange={onChange}
                    value={value}
                    placeholder="Введіть номер телефону"
                />
            )}
        />
        {errors.phone && <p className="error">{required}</p>}
    </div>
    <div className="checkbox">
        <label>
            <input type="checkbox"
                           {...register("checkbox",
                               {
                                   required: true
                               })}
                    />
            <span>Згоден, з <a target="_blank" href="https://policies.google.com/?hl=uk">правилами обробки персональних даних</a>*</span>
        </label>
    </div>
</div>
    <div className="checkout__receive">
        <h2 className="title">Доставка</h2>
        <select
            {...register("city",
                {
                    required: true
                })}>
            {options.map(item =>
                <option key={item.city} value={item.value}>{item.city}</option>
            )}
        </select>
        <div className="item">
            <label><span>Вулиця*</span></label>
            <input placeholder="Вулиця"
                   {...register("street",
                       {
                           required: required
                       }
                   )}/>
            {errors?.street && <p className="error">{errors.street.message}</p>}
        </div>

        <div className="item">
            <label><span>Будинок*</span></label>
            <input placeholder="Номер будинку чи квартири"
                   {...register("house",
                       {
                           required: required
                       }
                   )}/>
            {errors?.house && <p className="error">{errors.house.message}</p>}
        </div>
    </div>
</section>
    <section className="order">
        <h2 className="title">Ваше замовлення</h2>
        <div className="order__pizza">
            {products.map(product =>
                <div className="pizzaBlock" key={product.id}>
                    <ul>
                        <li>
                            <h4>{product.title}</h4>
                            <span>x{product.count}</span>
                        </li>
                        <li>
                            <p className="size">{product.span}</p>
                            <span className="price">{product.price} грн</span>
                        </li>
                    </ul>
                </div>
            )}
            <div className="totalSum">
                <h3>Всього до сплати</h3>
                <span className="price">{totalSum} грн</span>
            </div>
            <div className={`disabled ${isValid ? 'hide' : 'show'}`}>
                <MdOutlineError size={18} style={{color: "red", marginRight: 11}}/>
                Заповніть обовязкові поля
            </div>
            <div className="ordered">
                <input type="submit" value="Оплатити" disabled={!isValid}/>
            </div>
            <div className="back">
                <Link to="/">
                    <span>Повернутися в меню</span>
                </Link>

            </div>
        </div>
    </section>
</div>
</form> :
     <CartOrder/>
    );
};

export default Cart;











