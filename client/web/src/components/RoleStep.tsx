import { User } from "@/types/user";

interface Props {
    formData: User,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const RoleStep = ({ formData, onChange }: Props) => {
    return (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-lg font-semibold border-b pb-2">Step 3: Membership Role</h2>

            <div>
                <label className="text-sm font-medium">Occupation</label>
                <input name="occupation" required value={formData.occupation} onChange={onChange} className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"/>
            </div>
            <div>
                <label className="text-sm font-medium">Select Role</label>
                <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={onChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
                >
                    <option value="" disabled>Choose your role...</option>
                    <option value="Player">Player</option>
                    <option value="Coach">Coach</option>
                    <option value="Referee">Referee</option>
                    <option value="Official">Official</option>
                </select>
            </div>
            
        </div>
    );
}