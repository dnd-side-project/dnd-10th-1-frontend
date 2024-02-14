"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/libs/tailwind/cn"

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => {
  const [snap, setSnap] = React.useState<number | string | null>("302px")
  return (
    <DrawerPrimitive.Root
      snapPoints={["302px"]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  )
}
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "border-gray-200 border-b-none fixed inset-x-0 bottom-0 left-0 right-0 z-50 mx-auto flex h-full max-h-[97%] max-w-md flex-col rounded-t-[10px] border bg-white",
        className,
      )}
      {...props}
    >
      <div className="bg-muted mx-auto mt-3 h-1 w-9 rounded-full bg-gray-400" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-muted-foreground text-sm", className)} {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerOverlay, DrawerPortal, DrawerTrigger }
