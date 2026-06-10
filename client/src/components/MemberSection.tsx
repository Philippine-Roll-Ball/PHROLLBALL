import React, { useState } from 'react';
import { Users, Search, Plus, Loader2, Mail, MoreHorizontal, Shield, MapPin, Phone  } from 'lucide-react';
import { useMembers } from '../hook/useMembers'; // Import the hook!

export function MemberSection() {
  // 1. Consume the Hook
  const { members, isLoading, error } = useMembers();
  
  // Local UI state (search bar) stays in the component
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Filter logic 
  const filteredMembers = members.filter(member => 
    member.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header & Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search members by name, email, or role..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
          />
        </div>
        
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:opacity-90 transition-all shadow-sm">
          <Plus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20">
          <h3 className="font-display text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-muted-foreground" />
            Directory Overview
            <span className="text-muted-foreground text-sm font-normal">
              ({filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'})
            </span>
          </h3>
        </div>

        {/* Loading / Error / Empty / Data States */}
        {isLoading ? (
          <div className="flex justify-center p-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="text-center p-12 text-destructive">
            {error}
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center p-12 text-muted-foreground">
            {searchQuery ? "No members found matching your search." : "No members have been added yet."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium tracking-wider">Member</th>
                  <th className="px-6 py-4 font-medium tracking-wider">Contact</th>
                  <th className="px-6 py-4 font-medium tracking-wider">Location</th>
                  <th className="px-6 py-4 font-medium tracking-wider">Role</th>
                  <th className="px-6 py-4 font-medium tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredMembers.map((user) => (
                  <tr key={user.Uid} className="hover:bg-muted/30 transition-colors group">
                    
                    {/* Name & Email */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {user.firstName} {user.lastName}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1.5 mt-0.5 text-xs">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </span>
                      </div>
                    </td>
                    
                    {/* Contact Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="w-3.5 h-3.5" />
                        {user.ContactNumber}
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-foreground flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                          {user.city}, {user.province}
                        </span>
                        <span className="text-muted-foreground text-xs pl-5 mt-0.5">
                          {user.region}
                        </span>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {user.role.includes('Director') || user.role.includes('President') ? (
                          <Shield className="w-3.5 h-3.5 text-primary" />
                        ) : null}
                        <span className="text-muted-foreground">{user.role}</span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}