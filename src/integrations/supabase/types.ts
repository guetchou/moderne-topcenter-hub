export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_statistics: {
        Row: {
          agent_id: string | null
          average_response_time: unknown | null
          conversations_handled: number | null
          created_at: string
          date: string
          id: string
          online_duration: unknown | null
          satisfaction_score: number | null
        }
        Insert: {
          agent_id?: string | null
          average_response_time?: unknown | null
          conversations_handled?: number | null
          created_at?: string
          date: string
          id?: string
          online_duration?: unknown | null
          satisfaction_score?: number | null
        }
        Update: {
          agent_id?: string | null
          average_response_time?: unknown | null
          conversations_handled?: number | null
          created_at?: string
          date?: string
          id?: string
          online_duration?: unknown | null
          satisfaction_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_statistics_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          languages: string[] | null
          specialties: string[] | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          languages?: string[] | null
          specialties?: string[] | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          languages?: string[] | null
          specialties?: string[] | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ai_analytics: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          id: string
          metric_name: string
          metric_value: number
          model_version: string | null
          prediction_date: string | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          metric_name: string
          metric_value: number
          model_version?: string | null
          prediction_date?: string | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          metric_name?: string
          metric_value?: number
          model_version?: string | null
          prediction_date?: string | null
        }
        Relationships: []
      }
      ai_interactions: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          interaction_type: string
          response: string | null
          sentiment_score: number | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          interaction_type: string
          response?: string | null
          sentiment_score?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          interaction_type?: string
          response?: string | null
          sentiment_score?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      ai_suggestions: {
        Row: {
          category: string
          created_at: string | null
          id: string
          implemented_at: string | null
          status: string | null
          suggestion: string
          user_id: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: string
          implemented_at?: string | null
          status?: string | null
          suggestion: string
          user_id?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: string
          implemented_at?: string | null
          status?: string | null
          suggestion?: string
          user_id?: string | null
        }
        Relationships: []
      }
      blog_comments: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          post_id: string
          status: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          post_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          post_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string
          category: string
          content: string
          created_at: string
          excerpt: string | null
          id: string
          published_at: string | null
          slug: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category: string
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      communication_channels: {
        Row: {
          configuration: Json | null
          created_at: string
          id: string
          name: string
          status: string
          type: string
          updated_at: string
        }
        Insert: {
          configuration?: Json | null
          created_at?: string
          id?: string
          name: string
          status?: string
          type: string
          updated_at?: string
        }
        Update: {
          configuration?: Json | null
          created_at?: string
          id?: string
          name?: string
          status?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_requests: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          message: string
          status: string | null
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          message: string
          status?: string | null
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string
          status?: string | null
          subject?: string
        }
        Relationships: []
      }
      conversation_transfers: {
        Row: {
          completed_at: string | null
          conversation_id: string | null
          created_at: string
          from_agent_id: string | null
          id: string
          reason: string
          status: string
          to_agent_id: string | null
        }
        Insert: {
          completed_at?: string | null
          conversation_id?: string | null
          created_at?: string
          from_agent_id?: string | null
          id?: string
          reason: string
          status?: string
          to_agent_id?: string | null
        }
        Update: {
          completed_at?: string | null
          conversation_id?: string | null
          created_at?: string
          from_agent_id?: string | null
          id?: string
          reason?: string
          status?: string
          to_agent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_transfers_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_transfers_from_agent_id_fkey"
            columns: ["from_agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_transfers_to_agent_id_fkey"
            columns: ["to_agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          channel_id: string | null
          ended_at: string | null
          id: string
          metadata: Json | null
          satisfaction_score: number | null
          started_at: string
          status: string
          user_id: string | null
        }
        Insert: {
          channel_id?: string | null
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          satisfaction_score?: number | null
          started_at?: string
          status?: string
          user_id?: string | null
        }
        Update: {
          channel_id?: string | null
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          satisfaction_score?: number | null
          started_at?: string
          status?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "communication_channels"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          created_at: string
          email: string
          experience: string
          full_name: string
          id: string
          message: string
          phone: string
          position: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          experience: string
          full_name: string
          id?: string
          message: string
          phone: string
          position: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          experience?: string
          full_name?: string
          id?: string
          message?: string
          phone?: string
          position?: string
          status?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          attachments: Json | null
          content: string
          conversation_id: string | null
          created_at: string
          id: string
          read_at: string | null
          sender_type: string
        }
        Insert: {
          attachments?: Json | null
          content: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          read_at?: string | null
          sender_type: string
        }
        Update: {
          attachments?: Json | null
          content?: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          read_at?: string | null
          sender_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string
          service: string
          status: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone: string
          service: string
          status?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string
          service?: string
          status?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company: string | null
          content: string
          created_at: string
          id: string
          name: string
          rating: number | null
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          content: string
          created_at?: string
          id?: string
          name: string
          rating?: number | null
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          content?: string
          created_at?: string
          id?: string
          name?: string
          rating?: number | null
          role?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
