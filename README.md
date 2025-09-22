theme ของ shadcn(dark mode)
1.pnpm add next-themes
2.อย่าลืมเพิ่ม suppressHydrationWarning
3.import useTheme ให้กลายเป็น client
const {theme, setTheme} = useTheme()
4.การตั้งชื่อ constant ควรตั้งเป้นตัวใหญ่ และ as const

-เพิ่ม button ไม่ disable ถ้ามี role button ให้ cursor pointerbutton:not(:disabled),
  [role='button']:not(:disabled) {
    cursor: pointer;
  }


-ติดเรื่อง hydration
 const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
