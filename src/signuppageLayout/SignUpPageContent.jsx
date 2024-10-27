import { axiosInstance } from '@/helpers/axios';
import { useForm } from 'react-hook-form';

const roles = [
    { id: 1, name: "Yönetici", code: "admin" },
    { id: 2, name: "Mağaza", code: "store" },
    { id: 3, name: "Müşteri", code: "customer" }
  ];

export function SignUpPageContent() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const selectedRole = watch('role');
  
    const onSubmit = async (data) => {

      const signUpData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role
      }
      
      await axiosInstance.post('/signup', signUpData)
      .then((response) => {
        console.log(response)
        console.log(signUpData)
      })
      .catch((error) => {
        console.log(error)
      })
      }

    return(
        <section className = "flex flex-col justify-center mx-12 2xl:mx-[40rem] md:mx-[32rem] my-4 md:pt-[4rem] md:pb-[2rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className = "flex justify-center font-bold text-4xl mb-4 text-[#252B42]">Sign Up</h3>
        <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Name</label>
        <input
          type = "text"
          {...register('name', { required: true, minLength: 3 })}
          className="w-full p-2 border rounded"
        />
        {errors.name && errors.name.type === 'required' && <span className="text-red-400 text-base">This field is required</span>}
        {errors.name && errors.name.type === 'minLength' && <span className="text-red-400 text-base">Name must be at least 3 characters long</span>}
        </div>

      <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Email</label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <span className="text-red-400 text-base">This field is required and must be a valid email</span>}
      </div>

      <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Password</label>
        <input
          className="w-full p-2 border rounded"
          type="password"
          {...register('password', { 
            required: true, 
            minLength: 8, 
            validate: value => /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])/.test(value) || "Password must include upper case, lower case, numbers, and special characters."
          })}
        />
        {errors.password && <span className="text-red-400 text-base">{errors.password.message || "Password must be at least 8 characters"}</span>}
      </div>

      <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Confirm Password</label>
        <input
          className="w-full p-2 border rounded"
          type="password"
          {...register('confirmPassword', { 
            validate: value => value === watch('password') || "Passwords do not match."
          })}
        />
        {errors.confirmPassword && <span className="text-red-400 text-base">{errors.confirmPassword.message}</span>}
      </div>

      <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Role</label>
        <select
        className="w-full p-2 border rounded"
        {...register('role', { required: true })}>
          <option value="" disabled selected hidden>Select Role</option>
          {roles.map(role => (
            <option key={role.id} value={role.code}>{role.name}</option>
          ))}
        </select>
        {errors.role && <span className="text-red-400 text-base">This field is required</span>}
      </div>

      {selectedRole === 'store' && (
        <>
          <div className = "mb-3">
            <label className="block text-base text-[#252B42] font-semibold mb-2">Store Name</label>
            <input
              className="w-full p-2 border rounded"
              {...register('storeName', { required: true, minLength: 3 })}
            />
            {errors.storeName && errors.storeName.type === 'required' && <span className="text-red-400 text-base">This field is required</span>}
            {errors.storeName && errors.storeName.type === 'minLength' && <span className="text-red-400 text-base">Store Name must be at least 3 characters long</span>}
          </div>

          <div className = "mb-3">
            <label className="block text-base text-[#252B42] font-semibold mb-2">Store Phone</label>
            <input
              className="w-full p-2 border rounded"
              {...register('storePhone', { 
                required: true, 
                pattern: {
                  value: /^(?:\+90|0)(5\d{2})\d{7}$/,
                  message: "Invalid Türkiye phone number"
                }
              })}
            />
            {errors.storePhone && <span className="text-red-400 text-base">{errors.storePhone.message}</span>}
          </div>

          <div className = "mb-3">
            <label className="block text-base text-[#252B42] font-semibold mb-2">Store Tax ID</label>
            <input
              className="w-full p-2 border rounded"
              {...register('tax_no', { 
                required: true, 
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Tax ID must match the pattern TXXXXVXXXXXX"
                }
              })}
            />
            {errors.tax_no && <span className="text-red-400 text-base">{errors.tax_no.message}</span>}
          </div>

          <div className = "mb-3">
            <label className="block text-base text-[#252B42] font-semibold mb-2">Store Bank Account (IBAN)</label>
            <input
              className="w-full p-2 border rounded"
              {...register('bank_account', { 
                required: true, 
                pattern: {
                  value: /^TR\d{2}[0-9]{5}[0-9]{1,17}$/,
                  message: "Invalid IBAN format"
                }
              })}
            />
            {errors.bank_account && <span className="text-red-400 text-base">{errors.bank_account.message}</span>}
          </div>
        </>
      )}
      <div className = "flex justify-center">
      <button type="submit" className = "bg-[#2DC071] py-2.5 w-[10rem] rounded font-semibold text-xl mt-4">Sign Up</button>
      </div>
      </form>
      </section>
    )
}