"use strict";

// ==================================================
// コンネついーと App.js
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

  // ==================================================
  // DOM
  // ==================================================

  const authScreen =
    document.getElementById("authScreen");

  const appScreen =
    document.getElementById("appScreen");

  // ==================================================
  // Auth
  // ==================================================

  const loginPanel =
    document.getElementById("loginPanel");

  const registerPanel =
    document.getElementById("registerPanel");

  const forgotPanel =
    document.getElementById("forgotPanel");

  const loginForm =
    document.getElementById("loginForm");

  const registerForm =
    document.getElementById("registerForm");

  const forgotForm =
    document.getElementById("forgotForm");

  const loginError =
    document.getElementById("loginError");

  const registerError =
    document.getElementById("registerError");

  const forgotMessage =
    document.getElementById("forgotMessage");

  const showRegisterButton =
    document.getElementById("showRegisterButton");

  const showLoginButton =
    document.getElementById("showLoginButton");

  const forgotPasswordButton =
    document.getElementById("forgotPasswordButton");

  const backToLoginButton =
    document.getElementById("backToLoginButton");

  // ==================================================
  // User
  // ==================================================

  const usernameInput =
    document.getElementById("usernameInput");

  const settingsUsernameInput =
    document.getElementById(
      "settingsUsernameInput"
    );

  const userAvatarImage =
    document.getElementById("userAvatarImage");

  const userAvatarWrapper =
    document.querySelector(".user-avatar");

  // ==================================================
  // Profile Modal
  // ==================================================

  const profileModal =
    document.getElementById("profileModal");

  const closeProfileButton =
    document.getElementById("closeProfileButton");

  const profileAvatar =
    document.getElementById("profileAvatar");

  const profileAvatarImage =
    document.getElementById("profileAvatarImage");

  const profileAvatarFallback =
    document.getElementById("profileAvatarFallback");

  const profileAvatarInput =
    document.getElementById("profileAvatarInput");

  const profileAvatarButton =
    document.getElementById("profileAvatarButton");

  const removeAvatarButton =
    document.getElementById("removeAvatarButton");

  const profileNameInput =
    document.getElementById("profileNameInput");

  const profileBioInput =
    document.getElementById("profileBioInput");

  const profileMessage =
    document.getElementById("profileMessage");

  const saveProfileButton =
    document.getElementById("saveProfileButton");

  let pendingAvatarDataUrl = undefined;

  // ==================================================
  // View Profile Modal（他ユーザーのプロフィール表示）
  // ==================================================

  const viewProfileModal =
    document.getElementById("viewProfileModal");

  const closeViewProfileButton =
    document.getElementById("closeViewProfileButton");

  const viewProfileAvatarImage =
    document.getElementById("viewProfileAvatarImage");

  const viewProfileAvatarFallback =
    document.getElementById("viewProfileAvatarFallback");

  const viewProfileName =
    document.getElementById("viewProfileName");

  const viewProfileBio =
    document.getElementById("viewProfileBio");

  const editOwnProfileButton =
    document.getElementById("editOwnProfileButton");

  // Rooms
  // ==================================================

  const casualRoomButton =
    document.getElementById(
      "casualRoomButton"
    );

  const createRoomButton =
    document.getElementById(
      "createRoomButton"
    );

  const joinRoomButton =
    document.getElementById(
      "joinRoomButton"
    );

  const joinedRooms =
    document.getElementById(
      "joinedRooms"
    );

  const userSearchButton =
    document.getElementById("userSearchButton");

  const dmList =
    document.getElementById("dmList");

  const dmListEmpty =
    document.getElementById("dmListEmpty");

  const openDMsButton =
    document.getElementById("openDMsButton");

  const dmNotifBadge =
    document.getElementById("dmNotifBadge");

  const dmModal =
    document.getElementById("dmModal");

  const closeDMsButton =
    document.getElementById("closeDMsButton");

  // ==================================================
  // 通知パネル
  // ==================================================

  const notificationsButton =
    document.getElementById("notificationsButton");

  const notificationsBadge =
    document.getElementById("notificationsBadge");

  const notificationsPanel =
    document.getElementById("notificationsPanel");

  const notificationsList =
    document.getElementById("notificationsList");

  const notificationsEmpty =
    document.getElementById("notificationsEmpty");

  const clearNotificationsButton =
    document.getElementById("clearNotificationsButton");

  const roomName =
    document.getElementById(
      "roomName"
    );

  const roomIcon =
    document.getElementById(
      "roomIcon"
    );

  const inviteArea =
    document.getElementById(
      "inviteArea"
    );

  const inviteCode =
    document.getElementById(
      "inviteCode"
    );

  const inviteLinkButton =
    document.getElementById("inviteLinkButton");

  // ==================================================
  // Create modal
  // ==================================================

  const createModal =
    document.getElementById(
      "createModal"
    );

  const roomNameInput =
    document.getElementById(
      "roomNameInput"
    );

  const confirmCreateButton =
    document.getElementById(
      "confirmCreateButton"
    );

  const cancelCreateButtons =
    document.querySelectorAll(
      "#cancelCreateButton"
    );

  // ==================================================
  // Join modal
  // ==================================================

  const joinModal =
    document.getElementById(
      "joinModal"
    );

  const inviteCodeInput =
    document.getElementById(
      "inviteCodeInput"
    );

  const confirmJoinButton =
    document.getElementById(
      "confirmJoinButton"
    );

  const joinError =
    document.getElementById(
      "joinError"
    );

  const cancelJoinButtons =
    document.querySelectorAll(
      "#cancelJoinButton"
    );

  // ==================================================
  // User Search / DM modal
  // ==================================================

  const userSearchModal =
    document.getElementById("userSearchModal");

  const closeUserSearchButton =
    document.getElementById("closeUserSearchButton");

  const userSearchInput =
    document.getElementById("userSearchInput");

  const userSearchMessage =
    document.getElementById("userSearchMessage");

  const userSearchResults =
    document.getElementById("userSearchResults");

  // ==================================================
  // Friends
  // ==================================================

  const openFriendsButton =
    document.getElementById("openFriendsButton");

  const friendRequestBadge =
    document.getElementById("friendRequestBadge");

  const friendsModal =
    document.getElementById("friendsModal");

  const closeFriendsButton =
    document.getElementById("closeFriendsButton");

  const friendsTabs =
    document.querySelectorAll(".friends-tab");

  const friendsPanelFriends =
    document.getElementById("friendsPanelFriends");

  const friendsPanelIncoming =
    document.getElementById("friendsPanelIncoming");

  const friendsPanelOutgoing =
    document.getElementById("friendsPanelOutgoing");

  const friendsList =
    document.getElementById("friendsList");

  const friendsListEmpty =
    document.getElementById("friendsListEmpty");

  const incomingRequestsList =
    document.getElementById("incomingRequestsList");

  const incomingRequestsEmpty =
    document.getElementById("incomingRequestsEmpty");

  const outgoingRequestsList =
    document.getElementById("outgoingRequestsList");

  const outgoingRequestsEmpty =
    document.getElementById("outgoingRequestsEmpty");

  const viewProfileFriendButton =
    document.getElementById("viewProfileFriendButton");

  const viewProfileFriendMessage =
    document.getElementById("viewProfileFriendMessage");

  let viewedProfileUserId = null;

  // ==================================================
  // 質問箱・通報
  // ==================================================

  const viewProfileQuestionButton =
    document.getElementById("viewProfileQuestionButton");

  const viewProfileReportButton =
    document.getElementById("viewProfileReportButton");

  const viewProfileQABoard =
    document.getElementById("viewProfileQABoard");

  const viewProfileQAList =
    document.getElementById("viewProfileQAList");

  const askQuestionModal =
    document.getElementById("askQuestionModal");

  const closeAskQuestionButton =
    document.getElementById("closeAskQuestionButton");

  const questionInput =
    document.getElementById("questionInput");

  const askQuestionMessage =
    document.getElementById("askQuestionMessage");

  const sendQuestionButton =
    document.getElementById("sendQuestionButton");

  const questionInboxModal =
    document.getElementById("questionInboxModal");

  const closeQuestionInboxButton =
    document.getElementById("closeQuestionInboxButton");

  const questionInboxList =
    document.getElementById("questionInboxList");

  const questionInboxEmpty =
    document.getElementById("questionInboxEmpty");

  const reportModal =
    document.getElementById("reportModal");

  const closeReportButton =
    document.getElementById("closeReportButton");

  const reportReasonSelect =
    document.getElementById("reportReasonSelect");

  const reportDetailInput =
    document.getElementById("reportDetailInput");

  const reportMessage =
    document.getElementById("reportMessage");

  const submitReportButton =
    document.getElementById("submitReportButton");

  let pendingReportTarget = null;

  const openQuestionInboxButton =
    document.getElementById("openQuestionInboxButton");

  // ==================================================
  // 管理者パネル
  // ==================================================

  const adminSettingsGroup =
    document.getElementById("adminSettingsGroup");

  const openAdminPanelButton =
    document.getElementById("openAdminPanelButton");

  const adminPanelModal =
    document.getElementById("adminPanelModal");

  const closeAdminPanelButton =
    document.getElementById("closeAdminPanelButton");

  const adminPanelReports =
    document.getElementById("adminPanelReports");

  const adminPanelUsers =
    document.getElementById("adminPanelUsers");

  const adminReportsList =
    document.getElementById("adminReportsList");

  const adminReportsEmpty =
    document.getElementById("adminReportsEmpty");

  const adminUserSearchInput =
    document.getElementById("adminUserSearchInput");

  const adminUsersList =
    document.getElementById("adminUsersList");

  // ==================================================
  // Settings
  // ==================================================

  const settingsButton =
    document.getElementById(
      "settingsButton"
    );

  const settingsModal =
    document.getElementById(
      "settingsModal"
    );

  const closeSettingsButtons =
    document.querySelectorAll(
      "#closeSettingsButton"
    );

  const saveSettingsButton =
    document.getElementById(
      "saveSettingsButton"
    );

  const logoutButton =
    document.getElementById(
      "logoutButton"
    );

  const themeSelector =
    document.getElementById("themeSelector");

  const languageSelect =
    document.getElementById(
      "languageSelect"
    );

  const notificationSoundToggleButton =
    document.getElementById("notificationSoundToggleButton");

  const desktopNotificationToggleButton =
    document.getElementById("desktopNotificationToggleButton");

  const currentPasswordInput =
    document.getElementById("currentPasswordInput");

  const newPasswordInput =
    document.getElementById("newPasswordInput");

  const passwordChangeMessage =
    document.getElementById("passwordChangeMessage");

  const changePasswordButton =
    document.getElementById("changePasswordButton");

  const deleteAccountPasswordInput =
    document.getElementById("deleteAccountPasswordInput");

  const deleteAccountMessage =
    document.getElementById("deleteAccountMessage");

  const deleteAccountButton =
    document.getElementById("deleteAccountButton");

  // ==================================================
  // Chat
  // ==================================================

  const messages =
    document.getElementById(
      "messages"
    );

  const messageForm =
    document.getElementById(
      "messageForm"
    );

  const messageInput =
    document.getElementById(
      "messageInput"
    );

  const typingIndicator =
    document.getElementById("typingIndicator");

  // ==================================================
  // メンバー一覧
  // ==================================================

  const memberListOnlineItems =
    document.getElementById("memberListOnlineItems");

  const memberListOfflineItems =
    document.getElementById("memberListOfflineItems");

  const memberListOnlineCount =
    document.getElementById("memberListOnlineCount");

  const memberListOfflineCount =
    document.getElementById("memberListOfflineCount");

  const memberListOffline =
    document.getElementById("memberListOffline");

  const memberListPanel =
    document.getElementById("memberListPanel");

  const channelBar =
    document.getElementById("channelBar");

  const channelBarList =
    document.getElementById("channelBarList");

  const createChannelButton =
    document.getElementById("createChannelButton");

  let currentRoomMembers = [];
  let currentRoomOwnerId = null;
  let currentServerId = null;
  let currentChannels = [];

  const imageAttachButton =
    document.getElementById("imageAttachButton");

  const imageAttachInput =
    document.getElementById("imageAttachInput");

  const imageAttachPreview =
    document.getElementById("imageAttachPreview");

  const imageAttachPreviewImg =
    document.getElementById("imageAttachPreviewImg");

  const removeImageAttachButton =
    document.getElementById("removeImageAttachButton");

  let pendingImageDataUrl = null;

  const replyPreview =
    document.getElementById(
      "replyPreview"
    );

  const newMessageButton =
    document.getElementById(
      "newMessageButton"
    );

  const scrollTopButton =
    document.getElementById(
      "scrollTopButton"
    );

  const scrollBottomButton =
    document.getElementById(
      "scrollBottomButton"
    );

  const connectionDot =
    document.getElementById(
      "connectionDot"
    );

  // ==================================================
  // State
  // ==================================================

  let socket = null;

  let currentUser = null;

  let lastMessageAuthorId = null;
  let lastMessageTime = null;

  let currentRoomId = "casual";

  let currentChatType = "room";

  let dmListData = [];
  let dmSeenTimestamps = {};
  let roomSeenTimestamps = {};
  let roomSnapshotInitialized = false;
  let dmSnapshotInitialized = false;
  let notifications = [];

  // ==================================================
  // URLルーティング（部屋名でURLが変わるように）
  // ==================================================

  function buildPathForCurrentView() {

    if (currentChatType === "dm") {
      return `/dm/${encodeURIComponent(currentRoomId)}`;
    }

    if (String(currentRoomId) === "casual") {
      return "/casual";
    }

    const name =
      currentRoom && currentRoom.name
        ? currentRoom.name
        : currentRoomId;

    return `/${encodeURIComponent(name)}`;

  }

  function updateUrlForCurrentView(replace) {

    try {

      const path = buildPathForCurrentView();

      if (window.location.pathname === path) {
        return;
      }

      const method = replace ? "replaceState" : "pushState";

      window.history[method](
        { chatType: currentChatType, roomId: currentRoomId },
        "",
        path
      );

    } catch (error) {
      console.error("updateUrlForCurrentView error:", error);
    }

  }

  function parseRouteFromLocation() {

    const path = window.location.pathname;

    let match = path.match(/^\/dm\/([^/]+)\/?$/);

    if (match) {
      return { type: "dm", conversationId: decodeURIComponent(match[1]) };
    }

    if (path === "/casual" || path === "/") {
      return { type: "casual" };
    }

    match = path.match(/^\/([^/]+)\/?$/);

    if (match) {
      return { type: "room-name", name: decodeURIComponent(match[1]) };
    }

    return null;

  }

  function navigateToRoute(route) {

    if (!route || !socket || !socket.connected) return;

    if (route.type === "dm") {

      openDM(route.conversationId);

    } else if (route.type === "casual") {

      socket.emit("join casual");

    } else if (route.type === "room-name") {

      socket.emit("resolve room path", { name: route.name });

    }

  }

  window.addEventListener("popstate", () => {
    const route = parseRouteFromLocation();
    if (route) navigateToRoute(route);
  });

  let currentRoom = {
    id: "casual",
    name: "雑談",
    inviteCode: null,
    ownerId: null
  };

  let myRooms = [];

  let replyToMessage = null;

  let isLoadingMessages = false;

  // ==================================================
  // Utilities
  // ==================================================

  function escapeHtml(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }

  // ==================================================
  // アイコン画像 / 頭文字フォールバック 共通ヘルパー
  // ==================================================

  function buildReactionsHtml(message) {

    const reactions = Array.isArray(message.reactions) ? message.reactions : [];

    if (reactions.length === 0) return "";

    return reactions.map(reaction => {

      const mine =
        currentUser &&
        reaction.userIds.some(id => Number(id) === Number(currentUser.id));

      return `
        <button
          type="button"
          class="reaction-pill ${mine ? "mine" : ""}"
          data-action="toggle-reaction"
          data-emoji="${escapeHtml(reaction.emoji)}"
        >
          ${escapeHtml(reaction.emoji)} <span class="reaction-count">${reaction.userIds.length}</span>
        </button>
      `;

    }).join("");

  }

  const REACTION_EMOJI_CHOICES = ["👍", "❤️", "😂", "😮", "😢", "🔥", "🎉", "👀"];

  let reactionPickerEl = null;

  function closeReactionPicker() {
    reactionPickerEl?.remove();
    reactionPickerEl = null;
  }

  function openReactionPicker(anchorEl, messageId) {

    closeReactionPicker();

    const picker = document.createElement("div");
    picker.className = "reaction-picker";

    for (const emoji of REACTION_EMOJI_CHOICES) {

      const button = document.createElement("button");
      button.type = "button";
      button.className = "reaction-picker-option";
      button.textContent = emoji;

      button.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleReaction(messageId, emoji);
        closeReactionPicker();
      });

      picker.appendChild(button);

    }

    document.body.appendChild(picker);

    const rect = anchorEl.getBoundingClientRect();
    picker.style.top = `${rect.bottom + window.scrollY + 4}px`;
    picker.style.left = `${rect.left + window.scrollX}px`;

    reactionPickerEl = picker;

    setTimeout(() => {
      document.addEventListener("click", closeReactionPicker, { once: true });
    }, 0);

  }

  function toggleReaction(messageId, emoji) {

    if (!socket || !socket.connected) return;

    socket.emit("toggle reaction", { messageId, emoji });

  }

  function updateMessageReactions(messageId, reactions) {

    if (!messages) return;

    const container = messages.querySelector(
      `.message-reactions[data-message-id="${CSS.escape(String(messageId))}"]`
    );

    if (!container) return;

    const fakeMessage = { reactions };

    container.innerHTML =
      buildReactionsHtml(fakeMessage) +
      `<button type="button" class="reaction-add-button" data-action="add-reaction" title="リアクションを追加">😊+</button>`;

    container.querySelectorAll('[data-action="toggle-reaction"]').forEach(el => {
      el.addEventListener("click", () => {
        toggleReaction(messageId, el.dataset.emoji);
      });
    });

    container.querySelector('[data-action="add-reaction"]')?.addEventListener("click", (event) => {
      event.stopPropagation();
      openReactionPicker(event.currentTarget, messageId);
    });

  }

  function linkifyHtml(text) {

    const escaped = escapeHtml(text);

    const urlPattern =
      /(https?:\/\/[^\s<]+)/g;

    const linked = escaped.replace(
      urlPattern,
      (match) => {

        // 末尾の句読点・括弧はリンクに含めない
        let url = match;
        let trailing = "";

        while (
          url.length > 0 &&
          /[.,、。!！?？)）\]】」』]$/.test(url)
        ) {
          trailing = url.slice(-1) + trailing;
          url = url.slice(0, -1);
        }

        return `<a href="${url}" target="_blank" rel="noopener noreferrer nofollow">${url}</a>${trailing}`;

      }
    );

    // @メンションのハイライト（リンク化されたURL部分は避ける）
    const mentionPattern = /(^|[\s])@([^\s<@]+)/g;

    return linked.replace(
      mentionPattern,
      (fullMatch, before, name) => {
        return `${before}<span class="mention">@${name}</span>`;
      }
    );

  }

  function avatarInnerHtml(avatarUrl, name) {

    const letter =
      String(name || "U")
        .trim()
        .charAt(0)
        .toUpperCase() || "U";

    if (avatarUrl) {

      return `<img src="${escapeHtml(avatarUrl)}" alt="" class="avatar-image">`;

    }

    return `<span class="avatar-fallback">${escapeHtml(letter)}</span>`;

  }

  function formatTime(dateValue) {

    if (!dateValue) {
      return "";
    }

    const date =
      new Date(dateValue);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "";
    }

    return date.toLocaleTimeString(
      "ja-JP",
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );

  }

  function isNearBottom() {

    if (!messages) {
      return true;
    }

    const distance =
      messages.scrollHeight -
      messages.scrollTop -
      messages.clientHeight;

    return distance < 120;

  }

  function scrollToBottom(
    smooth = true
  ) {

    if (!messages) {
      return;
    }

    messages.scrollTo({
      top:
        messages.scrollHeight,

      behavior:
        smooth
          ? "smooth"
          : "auto"
    });

  }

  function showScreen(
    screen
  ) {

    if (screen === "app") {

      authScreen?.classList.add(
        "hidden"
      );

      appScreen?.classList.remove(
        "hidden"
      );

    } else {

      appScreen?.classList.add(
        "hidden"
      );

      authScreen?.classList.remove(
        "hidden"
      );

    }

  }

  function setConnection(
    connected
  ) {

    if (!connectionDot) {
      return;
    }

    if (connected) {

      connectionDot.classList.add(
        "connected"
      );

      connectionDot.classList.remove(
        "disconnected"
      );

    } else {

      connectionDot.classList.remove(
        "connected"
      );

      connectionDot.classList.add(
        "disconnected"
      );

    }

  }

  // ==================================================
  // Auth panel
  // ==================================================

  function showAuthPanel(
    panel
  ) {

    loginPanel?.classList.add(
      "hidden"
    );

    registerPanel?.classList.add(
      "hidden"
    );

    forgotPanel?.classList.add(
      "hidden"
    );

    panel?.classList.remove(
      "hidden"
    );

  }

  // ==================================================
  // API
  // ==================================================

  async function api(
    url,
    options = {}
  ) {

    const response =
      await fetch(
        url,
        {
          credentials: "same-origin",

          ...options,

          headers: {
            "Content-Type":
              "application/json",

            ...(options.headers || {})
          }
        }
      );

    let data = {};

    try {

      data =
        await response.json();

    } catch {

      data = {};

    }

    if (!response.ok) {

      const error =
        new Error(
          data.message ||
          "通信に失敗しました。"
        );

      error.status =
        response.status;

      error.data =
        data;

      throw error;

    }

    return data;

  }

  // ==================================================
  // Me
  // ==================================================

  async function loadCurrentUser() {

    try {

      const data =
        await api(
          "/api/me"
        );

      if (
        !data.loggedIn ||
        !data.user
      ) {

        currentUser = null;

        showScreen(
          "auth"
        );

        return false;

      }

      currentUser =
        data.user;

      updateUserUI();

      showScreen(
        "app"
      );

      return true;

    } catch (error) {

      console.error(
        "loadCurrentUser error:",
        error
      );

      showScreen(
        "auth"
      );

      return false;

    }

  }

  function updateUserUI() {

    if (!currentUser) {
      return;
    }

    adminSettingsGroup?.classList.toggle("hidden", !currentUser.isAdmin);

    if (usernameInput) {

      usernameInput.textContent =
        currentUser.name;

    }

    if (settingsUsernameInput) {

      settingsUsernameInput.value =
        currentUser.name;

    }

    if (userAvatarImage) {

      if (currentUser.avatar) {

        userAvatarImage.src =
          currentUser.avatar;

        userAvatarImage.classList.remove(
          "hidden"
        );

      } else {

        userAvatarImage.src = "";

        userAvatarImage.classList.add(
          "hidden"
        );

      }

    }

    if (userAvatarWrapper) {

      const fallback =
        userAvatarWrapper.querySelector(
          "span:not(.user-avatar-image)"
        );

      if (fallback) {

        fallback.textContent =
          (currentUser.name || "U")
            .trim()
            .charAt(0)
            .toUpperCase() || "U";

      }

    }

  }

  // ==================================================
  // Socket
  // ==================================================

  function connectSocket() {

    if (socket) {

      try {

        socket.disconnect();

      } catch {

        // ignore

      }

    }

    socket =
      io({
        withCredentials: true
      });

    // ==================================================
    // Connect
    // ==================================================

    function requestActiveRoomData() {

      if (currentChatType === "dm") {

        openDM(currentRoomId);

      } else if (String(currentRoomId) === "casual") {

        socket.emit("join casual");

      } else if (currentServerId) {

        // 特定のチャンネルを見ていた場合はそのチャンネルを、
        // そうでなければ部屋の既定チャンネル（部屋自身のID）を開く
        socket.emit(
          "open channel",
          { channelId: currentRoomId }
        );

      } else {

        socket.emit(
          "open my room",
          { roomId: currentRoomId }
        );

      }

    }

    let hasHandledInitialRoute = false;

    socket.on(
      "connect",
      () => {

        console.log(
          "Socket connected:",
          socket.id
        );

        setConnection(
          true
        );

        socket.emit(
          "get my rooms"
        );

        socket.emit("get my dms");

        // フレンド一覧・リクエストも読み込む
        loadFriends();

        if (!hasHandledInitialRoute) {

          hasHandledInitialRoute = true;

          const initialRoute = parseRouteFromLocation();

          if (initialRoute && initialRoute.type !== "casual") {

            navigateToRoute(initialRoute);

            setTimeout(() => navigateToRoute(initialRoute), 1000);

            return;

          }

        }

        // 再接続・ページ更新時に、直前まで見ていた
        // 部屋/DMのメッセージを再取得する
        requestActiveRoomData();

        // サーバー起動直後などで初期化に時間がかかる場合に備え、
        // 少し時間を置いてもう一度リクエストする（安全策）
        setTimeout(
          requestActiveRoomData,
          1000
        );

      }
    );

    // ==================================================
    // フレンド申請・承認のリアルタイム反映
    // ==================================================

    socket.on(
      "friend request update",
      () => {
        loadFriends();
      }
    );

    socket.on("admin status changed", (data) => {

      if (!data || !currentUser) return;

      currentUser.isAdmin = Boolean(data.isAdmin);

      adminSettingsGroup?.classList.toggle("hidden", !currentUser.isAdmin);

      addNotification(
        "admin",
        currentUser.isAdmin
          ? "管理者に任命されました"
          : "管理者権限が解除されました"
      );

    });

    socket.on(
      "friend request received",
      (data) => {

        addNotification(
          "friend",
          `${data?.fromName || "誰か"}さんからフレンド申請が届きました`,
          () => openFriendsModal()
        );

      }
    );

    socket.on(
      "friend request accepted",
      (data) => {

        addNotification(
          "friend",
          `${data?.byName || "誰か"}さんとフレンドになりました`,
          () => openFriendsModal()
        );

      }
    );

    // ==================================================
    // Disconnect
    // ==================================================

    socket.on(
      "disconnect",
      (reason) => {

        console.log(
          "Socket disconnected:",
          reason
        );

        setConnection(
          false
        );

      }
    );

    // ==================================================
    // Connection Error
    // ==================================================

    socket.on(
      "connect_error",
      (error) => {

        console.error(
          "Socket connection error:",
          error
        );

        setConnection(
          false
        );

        if (
          error?.message ===
          "UNAUTHORIZED"
        ) {

          showScreen(
            "auth"
          );

        }

      }
    );

    // ==================================================
    // My Rooms
    // ==================================================

    socket.on(
      "my rooms",
      (rooms) => {

        console.log(
          "my rooms:",
          rooms
        );

        const roomList =
          Array.isArray(rooms) ? rooms : [];

        if (!roomSnapshotInitialized) {

          for (const room of roomList) {
            roomSeenTimestamps[room.id] =
              room.lastMessageAt ? new Date(room.lastMessageAt).getTime() : 0;
          }

          roomSnapshotInitialized = true;

        } else {

          for (const room of roomList) {

            const isOpen =
              currentChatType === "room" &&
              (String(currentRoomId) === String(room.id) || String(currentServerId) === String(room.id));

            const newTime = room.lastMessageAt ? new Date(room.lastMessageAt).getTime() : 0;
            const seenTime = roomSeenTimestamps[room.id] || 0;

            if (newTime > seenTime && isOpen) {
              roomSeenTimestamps[room.id] = newTime;
            }

          }

        }

        setMyRooms(roomList);

      }
    );

    // ==================================================
    // Room Created
    // ==================================================

    socket.on(
      "room created",
      (room) => {

        console.log(
          "room created:",
          room
        );

        if (!room) {
          return;
        }

        currentChatType = "room";

        currentRoom =
          room;

        currentRoomId =
          room.id;

        currentServerId =
          room.id;

        currentChannels = [];
        renderChannelBar();

        addOrUpdateMyRoom(
          room
        );

        roomSeenTimestamps[room.id] = Date.now();

        updateCurrentRoomUI();

        updateUrlForCurrentView();

        closeCreateModal();

      }
    );

    // ==================================================
    // Room Joined
    // ==================================================

    socket.on(
      "room joined",
      (room) => {

        console.log(
          "room joined:",
          room
        );

        if (!room) {
          return;
        }

        currentChatType = "room";

        currentRoom =
          room;

        currentRoomId =
          room.id;

        currentServerId =
          room.id;

        currentChannels = [];
        renderChannelBar();

        addOrUpdateMyRoom(
          room
        );

        roomSeenTimestamps[room.id] = Date.now();

        updateCurrentRoomUI();

        updateUrlForCurrentView();

        closeJoinModal();

      }
    );

    // ==================================================
    // Room Opened
    // ==================================================

    socket.on(
      "room opened",
      (room) => {

        console.log(
          "room opened:",
          room
        );

        if (!room) {
          return;
        }

        currentChatType = "room";

        currentRoom =
          room;

        currentRoomId =
          room.id;

        currentServerId =
          room.id;

        currentChannels = [];
        renderChannelBar();

        addOrUpdateMyRoom(
          room
        );

        roomSeenTimestamps[room.id] = Date.now();

        updateCurrentRoomUI();

        updateUrlForCurrentView();

      }
    );

    // ==================================================
    // Casual
    // ==================================================

    socket.on(
      "casual joined",
      () => {

        currentChatType = "room";

        currentRoomId =
          "casual";

        currentRoom = {
          id: "casual",
          name: "雑談",
          inviteCode: null,
          ownerId: null
        };

        currentServerId = null;
        currentChannels = [];
        renderChannelBar();

        updateCurrentRoomUI();

        updateUrlForCurrentView();

      }
    );

    // ==================================================
    // メンバー一覧・オンライン状態
    // ==================================================

    socket.on("room members", (data) => {
      currentRoomMembers = Array.isArray(data?.members) ? data.members : [];
      currentRoomOwnerId = data?.ownerId !== undefined && data?.ownerId !== null ? Number(data.ownerId) : null;
      renderMemberList();
    });

    socket.on("presence update", (data) => {
      if (!data) return;
      updateMemberPresence(data.userId, data.online);
    });

    // ==================================================
    // チャンネル一覧
    // ==================================================

    socket.on("channels", (data) => {

      if (!data || String(data.roomId) !== String(currentServerId)) return;

      currentChannels = Array.isArray(data.channels) ? data.channels : [];
      renderChannelBar();

    });

    socket.on("channels updated", (data) => {

      if (!data || String(data.roomId) !== String(currentServerId)) return;

      socket.emit("get channels", { roomId: currentServerId });

    });

    socket.on("channel opened", (data) => {

      if (!data) return;

      currentChatType = "room";
      currentRoomId = data.id;
      currentServerId = data.roomId;

      currentRoom = {
        id: data.roomId,
        name: data.roomName,
        inviteCode: currentRoom?.id === data.roomId ? currentRoom.inviteCode : null,
        ownerId: data.ownerId
      };

      if (roomName) roomName.textContent = `${data.roomName} / ${data.name}`;
      if (roomIcon) roomIcon.textContent = "📁";

      casualRoomButton?.classList.remove("active");
      roomSeenTimestamps[data.roomId] = Date.now();
      renderJoinedRooms();

      renderChannelBar();

      updateUrlForCurrentView();

    });

    // ==================================================
    // 入力中インジケーター
    // ==================================================

    socket.on("user typing", (data) => {

      if (!data) return;
      if (String(data.room) !== String(currentRoomId) || currentChatType === "dm") return;
      if (currentUser && Number(data.userId) === Number(currentUser.id)) return;

      if (typingIndicator) {

        typingIndicator.textContent = `${data.username || "誰か"}さんが入力中...`;
        typingIndicator.classList.remove("hidden");

        clearTimeout(typingIndicator._hideTimeout);

        typingIndicator._hideTimeout = setTimeout(() => {
          typingIndicator.classList.add("hidden");
        }, 3000);

      }

    });

    // ==================================================
    // My DMs
    // ==================================================

    socket.on("my dms", (list) => {

      dmListData = Array.isArray(list) ? list : [];

      if (!dmSnapshotInitialized) {

        // 初回受信時は「新着」とみなさず、基準値として記録するだけ
        for (const dm of dmListData) {
          dmSeenTimestamps[dm.id] = dm.lastMessageAt ? new Date(dm.lastMessageAt).getTime() : 0;
        }

        dmSnapshotInitialized = true;

      } else {

        for (const dm of dmListData) {

          const isOpen =
            currentChatType === "dm" &&
            String(currentRoomId) === String(dm.id);

          const newTime = dm.lastMessageAt ? new Date(dm.lastMessageAt).getTime() : 0;
          const seenTime = dmSeenTimestamps[dm.id] || 0;

          if (newTime > seenTime) {

            if (isOpen) {

              dmSeenTimestamps[dm.id] = newTime;

            } else {

              addNotification(
                "dm",
                `${dm.otherUserName || "ユーザー"}: ${dm.lastMessage || "新しいメッセージ"}`,
                () => openDM(dm.id)
              );

              dmSeenTimestamps[dm.id] = newTime;

            }

          }

        }

      }

      renderDMList();
    });

    socket.on("dm opened", (dm) => {
      if (!dm) return;

      currentChatType = "dm";
      currentRoomId = dm.id;
      currentRoom = {
        id: dm.id,
        name: dm.otherUserName || "DM",
        inviteCode: null,
        ownerId: null,
        otherUserId: dm.otherUserId
      };

      updateCurrentRoomUI();
      clearMessages();
      clearReply();

      currentRoomMembers = [];
      renderMemberList();

      currentServerId = null;
      currentChannels = [];
      renderChannelBar();

      updateUrlForCurrentView();
    });

    socket.on("dm previous messages", (list) => {
      renderMessages(Array.isArray(list) ? list : []);
    });

    socket.on("dm message", (message) => {
      if (!message || String(message.room) !== String(currentRoomId) || currentChatType !== "dm") return;
      notifyIncomingMessage(message);
      const shouldScroll = isNearBottom();
      appendMessage(message);
      if (shouldScroll) scrollToBottom(true);
    });

    socket.on("dm error", (data) => {
      alert(data?.message || "DMを開けませんでした。");
    });

    socket.on("dm message error", (data) => {
      alert(data?.message || "DMを送信できませんでした。");
    });

    // ==================================================
    // Previous Messages
    // ==================================================

    socket.on(
      "previous messages",
      (list) => {

        renderMessages(
          Array.isArray(list)
            ? list
            : []
        );

      }
    );

    // ==================================================
    // New Message
    // ==================================================

    socket.on(
      "chat message",
      (message) => {

        if (!message) {
          return;
        }

        if (
          String(message.room) !==
          String(currentRoomId)
        ) {

          return;

        }

        const shouldScroll =
          isNearBottom();

        notifyIncomingMessage(
          message
        );

        appendMessage(
          message
        );

        if (shouldScroll) {

          scrollToBottom(
            true
          );

        } else {

          newMessageButton?.classList.remove(
            "hidden"
          );

        }

      }
    );

    // ==================================================
    // Message Edited
    // ==================================================

    socket.on(
      "message edited",
      (message) => {

        if (!message) {
          return;
        }

        updateMessageElement(
          message
        );

      }
    );

    // ==================================================
    // リアクション更新
    // ==================================================

    socket.on("reactions updated", (data) => {

      if (!data) return;

      updateMessageReactions(data.messageId, Array.isArray(data.reactions) ? data.reactions : []);

    });

    // ==================================================
    // メンション通知
    // ==================================================

    socket.on("mention received", (data) => {

      if (!data) return;

      addNotification(
        "mention",
        `${data.fromName || "誰か"}さんがあなたをメンションしました: ${data.text || ""}`,
        () => {

          if (data.isDm) {
            openDM(data.room);
          } else if (data.room === "casual") {
            socket.emit("join casual");
          } else if (data.room) {
            // 部屋の該当チャンネルを開く（既定チャンネルの場合はそのまま部屋を開く）
            socket.emit("open channel", { channelId: data.room });
          }

        }
      );

    });

    // ==================================================
    // 質問箱通知
    // ==================================================

    socket.on("question received", () => {

      addNotification(
        "question",
        "質問箱に新しい質問が届きました",
        () => openQuestionInboxModal()
      );

    });

    // ==================================================
    // Message Deleted
    // ==================================================

    socket.on(
      "message deleted",
      (data) => {

        if (!data) {
          return;
        }

        const element =
          document.querySelector(
            `[data-message-id="${CSS.escape(
              String(data.id)
            )}"]`
          );

        if (element) {

          element.classList.add(
            "message-removing"
          );

          setTimeout(
            () => {

              element.remove();

            },
            180
          );

        }

      }
    );

    // ==================================================
    // Room Deleted
    // ==================================================

    socket.on(
      "room deleted",
      (data) => {

        const roomId =
          String(
            data?.roomId || ""
          );

        if (!roomId) {
          return;
        }

        console.log(
          "room deleted:",
          roomId
        );

        myRooms =
          myRooms.filter(
            room =>
              String(room.id) !==
              roomId
          );

        renderJoinedRooms();

        if (
          String(currentRoomId) ===
          roomId
        ) {

          currentRoomId =
            "casual";

          currentRoom = {
            id: "casual",
            name: "雑談",
            inviteCode: null,
            ownerId: null
          };

          updateCurrentRoomUI();

          messages.innerHTML =
            "";

          if (
            socket.connected
          ) {

            socket.emit(
              "join casual"
            );

          }

        }

      }
    );

    // ==================================================
    // Errors
    // ==================================================

    socket.on(
      "create room error",
      (data) => {

        alert(
          data?.message ||
          "部屋を作成できませんでした。"
        );

      }
    );

    socket.on(
      "join room error",
      (data) => {

        if (joinError) {

          joinError.textContent =
            data?.message ||
            "部屋に参加できませんでした。";

        } else {

          alert(
            data?.message ||
            "部屋に参加できませんでした。"
          );

        }

      }
    );

    socket.on(
      "room open error",
      (data) => {

        alert(
          data?.message ||
          "部屋を開けませんでした。"
        );

      }
    );

    // ==================================================
    // 部屋名URLの解決結果
    // ==================================================

    socket.on(
      "room path resolved",
      (data) => {

        if (!data) return;

        if (!data.found) {

          alert(
            `「${data.name}」という部屋は見つかりませんでした。`
          );

          socket.emit("join casual");

          return;

        }

        if (data.member) {

          socket.emit("open my room", { roomId: data.roomId });

          return;

        }

        // 参加していない部屋 → 招待コード入力を促す
        openJoinModal();

        const description =
          document.getElementById("joinModalDescription");

        if (description) {
          description.textContent =
            `「${data.name}」に参加するには招待コードが必要です。`;
        }

      }
    );

    socket.on(
      "delete room error",
      (data) => {

        alert(
          data?.message ||
          "部屋を削除できませんでした。"
        );

      }
    );

    socket.on(
      "message send error",
      (data) => {

        alert(
          data?.message ||
          "メッセージを送信できませんでした。"
        );

      }
    );

    socket.on(
      "message edit error",
      (data) => {

        alert(
          data?.message ||
          "コメントを編集できませんでした。"
        );

      }
    );

    socket.on(
      "message delete error",
      (data) => {

        alert(
          data?.message ||
          "コメントを削除できませんでした。"
        );

      }
    );

  }

  // ==================================================
  // Rooms
  // ==================================================

  function setMyRooms(
    rooms
  ) {

    const unique =
      new Map();

    for (
      const room of rooms
    ) {

      if (
        !room ||
        !room.id
      ) {
        continue;
      }

      unique.set(
        String(room.id),
        room
      );

    }

    myRooms =
      Array.from(
        unique.values()
      );

    renderJoinedRooms();

  }

  function addOrUpdateMyRoom(
    room
  ) {

    if (
      !room ||
      !room.id
    ) {
      return;
    }

    const roomId =
      String(room.id);

    const index =
      myRooms.findIndex(
        item =>
          String(item.id) ===
          roomId
      );

    if (index >= 0) {

      myRooms[index] = {
        ...myRooms[index],
        ...room
      };

    } else {

      myRooms.push(
        room
      );

    }

    renderJoinedRooms();

  }

  function renderJoinedRooms() {

    if (!joinedRooms) {
      return;
    }

    joinedRooms.innerHTML =
      "";

    if (
      myRooms.length === 0
    ) {

      const empty =
        document.createElement(
          "div"
        );

      empty.className =
        "joined-rooms-empty";

      empty.textContent =
        "参加中の部屋はありません";

      joinedRooms.appendChild(
        empty
      );

      return;

    }

    const rooms =
      [...myRooms].sort(
        (a, b) => {

          const aTime =
            new Date(
              a.createdAt || 0
            ).getTime();

          const bTime =
            new Date(
              b.createdAt || 0
            ).getTime();

          return aTime - bTime;

        }
      );

    for (
      const room of rooms
    ) {

      const button =
        document.createElement(
          "div"
        );

      button.className =
        "joined-room-item";

      if (
        String(room.id) ===
        String(currentRoomId)
      ) {

        button.classList.add(
          "active"
        );

      }

      const main =
        document.createElement(
          "button"
        );

      main.type =
        "button";

      main.className =
        "joined-room-main";

      main.innerHTML = `
        <span class="joined-room-icon">
          🏠
        </span>

        <span class="joined-room-name">
          ${escapeHtml(room.name)}
        </span>

        ${
          (() => {
            const lastTime = room.lastMessageAt ? new Date(room.lastMessageAt).getTime() : 0;
            const seenTime = roomSeenTimestamps[room.id] || 0;
            const isActive = String(room.id) === String(currentRoomId) || String(room.id) === String(currentServerId);
            return (lastTime > seenTime && !isActive) ? '<span class="unread-dot"></span>' : "";
          })()
        }
      `;

      main.addEventListener(
        "click",
        () => {

          openMyRoom(
            room.id
          );

        }
      );

      button.appendChild(
        main
      );

      const ownerId =
        room.ownerId !== null &&
        room.ownerId !== undefined
          ? Number(room.ownerId)
          : null;

      const userId =
        currentUser
          ? Number(currentUser.id)
          : null;

      if (
        ownerId !== null &&
        userId !== null &&
        ownerId === userId
      ) {

        const deleteButton =
          document.createElement(
            "button"
          );

        deleteButton.type =
          "button";

        deleteButton.className =
          "joined-room-delete";

        deleteButton.title =
          "この部屋を削除";

        deleteButton.textContent =
          "×";

        deleteButton.addEventListener(
          "click",
          (event) => {

            event.preventDefault();

            event.stopPropagation();

            deleteRoom(
              room
            );

          }
        );

        button.appendChild(
          deleteButton
        );

      }

      joinedRooms.appendChild(
        button
      );

    }

  }

  // ==================================================
  // Open Room
  // ==================================================

  function openMyRoom(
    roomId
  ) {

    if (
      !socket ||
      !socket.connected
    ) {

      alert(
        "サーバーに接続されていません。"
      );

      return;

    }

    const room =
      myRooms.find(
        item =>
          String(item.id) ===
          String(roomId)
      );

    if (!room) {

      console.warn(
        "Room not found:",
        roomId
      );

      socket.emit(
        "get my rooms"
      );

      return;

    }

    currentChatType = "room";

    currentRoomId =
      room.id;

    currentRoom =
      room;

    updateCurrentRoomUI();

    clearMessages();

    socket.emit(
      "open my room",
      {
        roomId:
          room.id
      }
    );

  }

  // ==================================================
  // Delete Room
  // ==================================================

  function deleteRoom(
    room
  ) {

    if (!room) {
      return;
    }

    const roomNameText =
      room.name ||
      "この部屋";

    const confirmed =
      window.confirm(
        `「${roomNameText}」を削除しますか？\n\nこの部屋のメッセージも削除されます。\nこの操作は元に戻せません。`
      );

    if (!confirmed) {
      return;
    }

    if (
      !socket ||
      !socket.connected
    ) {

      alert(
        "サーバーに接続されていません。"
      );

      return;

    }

    socket.emit(
      "delete room",
      {
        roomId:
          room.id
      }
    );

  }

  // ==================================================
  // Current Room UI
  // ==================================================

  function updateCurrentRoomUI() {

    if (currentChatType === "dm") {
      if (roomName) roomName.textContent = currentRoom?.name || "DM";
      if (roomIcon) roomIcon.textContent = "✉️";
      if (inviteArea) inviteArea.classList.add("hidden");
      casualRoomButton?.classList.remove("active");
      renderJoinedRooms();
      renderDMList();
      memberListPanel?.classList.add("hidden");
      return;
    }

    memberListPanel?.classList.remove("hidden");

    const isCasual = String(currentRoomId) === "casual";

    if (isCasual) {
      if (roomName) roomName.textContent = "雑談";
      if (roomIcon) roomIcon.textContent = "💬";
      if (inviteArea) inviteArea.classList.add("hidden");
      casualRoomButton?.classList.add("active");
    } else {
      if (roomName) roomName.textContent = currentRoom?.name || "ルーム";
      if (roomIcon) roomIcon.textContent = "🏠";
      if (inviteArea && currentRoom?.inviteCode) inviteArea.classList.remove("hidden");
      if (inviteCode) inviteCode.textContent = currentRoom?.inviteCode || "------";
      casualRoomButton?.classList.remove("active");
    }

    renderJoinedRooms();
    renderDMList();
  }


  // ==================================================
  // Casual
  // ==================================================

  function joinCasualRoom() {

    if (
      !socket ||
      !socket.connected
    ) {

      return;

    }

    currentChatType = "room";

    currentRoomId =
      "casual";

    currentRoom = {
      id: "casual",
      name: "雑談",
      inviteCode: null,
      ownerId: null
    };

    updateCurrentRoomUI();

    clearMessages();

    socket.emit(
      "join casual"
    );

  }

  casualRoomButton?.addEventListener(
    "click",
    joinCasualRoom
  );

  // ==================================================
  // DM / User Search
  // ==================================================

  function openUserSearchModal() {
    userSearchModal?.classList.remove("hidden");
    if (userSearchMessage) userSearchMessage.textContent = "";
    if (userSearchResults) userSearchResults.innerHTML = "";
    if (userSearchInput) {
      userSearchInput.value = "";
      setTimeout(() => userSearchInput.focus(), 50);
    }
  }

  function closeUserSearchModal() {
    userSearchModal?.classList.add("hidden");
  }

  async function searchUsers() {
    const q = String(userSearchInput?.value || "").trim();
    if (!q) {
      if (userSearchMessage) userSearchMessage.textContent = "ユーザー名を入力してください。";
      if (userSearchResults) userSearchResults.innerHTML = "";
      return;
    }

    try {
      if (userSearchMessage) userSearchMessage.textContent = "検索中…";
      const data = await api(`/api/users/search?q=${encodeURIComponent(q)}`);
      renderUserSearchResults(Array.isArray(data?.users) ? data.users : []);
    } catch (error) {
      if (userSearchMessage) userSearchMessage.textContent = error.message || "検索できませんでした。";
    }
  }

  function renderUserSearchResults(users) {
    if (!userSearchResults) return;
    userSearchResults.innerHTML = "";
    if (users.length === 0) {
      if (userSearchMessage) userSearchMessage.textContent = "ユーザーが見つかりませんでした。";
      return;
    }
    if (userSearchMessage) userSearchMessage.textContent = `${users.length}件見つかりました。`;
    for (const item of users) {
      const row = document.createElement("div");
      row.className = "user-search-row";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "user-search-result";
      button.innerHTML = `<span class="user-search-avatar">${avatarInnerHtml(item.avatar, item.name)}</span><span class="user-search-name">${escapeHtml(item.name)}</span><span class="user-search-arrow">›</span>`;
      button.addEventListener("click", () => startDM(item.id));

      const friendButton = document.createElement("button");
      friendButton.type = "button";
      friendButton.className = "friend-quick-button";
      friendButton.title = "フレンド申請を送る";
      friendButton.textContent = "＋フレンド";
      friendButton.addEventListener("click", async (event) => {
        event.stopPropagation();
        friendButton.disabled = true;
        try {
          const data = await sendFriendRequest(item.id);
          friendButton.textContent = data?.status === "accepted" ? "フレンド" : "申請済み";
        } catch (error) {
          friendButton.disabled = false;
          alert(error.message || "フレンド申請を送れませんでした。");
        }
      });

      row.appendChild(button);
      row.appendChild(friendButton);
      userSearchResults.appendChild(row);
    }
  }

  function startDM(userId) {
    if (!socket || !socket.connected) {
      alert("サーバーに接続されていません。");
      return;
    }
    socket.emit("start dm", { userId });
    closeUserSearchModal();
    closeDMsModal();
  }

  function openDM(conversationId) {
    if (!socket || !socket.connected) return;
    socket.emit("open dm", { conversationId });
    dmSeenTimestamps[conversationId] = Date.now();
    closeDMsModal();
  }

  // ==================================================
  // メンバー一覧
  // ==================================================

  function renderMemberList() {

    const online = currentRoomMembers.filter(m => m.online);
    const offline = currentRoomMembers.filter(m => !m.online);

    if (memberListOnlineCount) memberListOnlineCount.textContent = String(online.length);
    if (memberListOfflineCount) memberListOfflineCount.textContent = String(offline.length);

    memberListOffline?.classList.toggle("hidden", offline.length === 0);

    function renderGroup(container, members) {

      if (!container) return;

      container.innerHTML = "";

      for (const member of members) {

        const row = document.createElement("div");
        row.className = "member-list-item";
        row.dataset.userId = String(member.id);

        row.innerHTML = `
          <span class="member-list-avatar ${member.online ? "" : "offline"}">
            ${avatarInnerHtml(member.avatar, member.name)}
            <span class="member-status-dot ${member.online ? "online" : "offline"}"></span>
          </span>
          <span class="member-list-name">
            ${Number(member.id) === Number(currentRoomOwnerId) ? '<span class="member-owner-badge" title="サーバーオーナー">👑</span>' : ""}
            ${escapeHtml(member.name)}
          </span>
        `;

        row.addEventListener("click", () => {
          openUserProfile(member.id, member.name, member.avatar);
        });

        container.appendChild(row);

      }

    }

    renderGroup(memberListOnlineItems, online);
    renderGroup(memberListOfflineItems, offline);

  }

  function updateMemberPresence(userId, online) {

    let changed = false;

    for (const member of currentRoomMembers) {
      if (Number(member.id) === Number(userId)) {
        member.online = online;
        changed = true;
      }
    }

    if (changed) {
      renderMemberList();
    }

  }

  // ==================================================
  // チャンネル一覧（サーバー内）
  // ==================================================

  function renderChannelBar() {

    if (!channelBar || !channelBarList) return;

    if (!currentServerId || currentChatType === "dm" || String(currentRoomId) === "casual") {
      channelBar.classList.add("hidden");
      return;
    }

    channelBar.classList.remove("hidden");
    channelBarList.innerHTML = "";

    for (const channel of currentChannels) {

      const button = document.createElement("button");
      button.type = "button";
      button.className = "channel-pill";

      if (String(channel.id) === String(currentRoomId)) {
        button.classList.add("active");
      }

      button.innerHTML = `<span class="channel-hash">#</span>${escapeHtml(channel.name)}`;

      button.addEventListener("click", () => {

        if (String(channel.id) === String(currentRoomId)) return;

        if (!socket || !socket.connected) return;

        clearMessages();
        socket.emit("open channel", { channelId: channel.id });

      });

      channelBarList.appendChild(button);

    }

    const isOwner =
      currentUser &&
      currentRoom &&
      Number(currentRoom.ownerId) === Number(currentUser.id);

    createChannelButton?.classList.toggle("hidden", !isOwner);

  }

  createChannelButton?.addEventListener("click", () => {

    if (!currentServerId) return;

    const name = window.prompt("チャンネル名を入力してください（例: general、雑談）");

    if (!name || !name.trim()) return;

    if (!socket || !socket.connected) {
      alert("サーバーに接続されていません。");
      return;
    }

    socket.emit("create channel", {
      roomId: currentServerId,
      name: name.trim().slice(0, 50)
    });

  });

  function renderDMList() {
    if (!dmList) return;
    dmList.innerHTML = "";
    dmListEmpty?.classList.toggle("hidden", dmListData.length > 0);
    for (const dm of dmListData) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "dm-button";
      if (String(currentRoomId) === String(dm.id) && currentChatType === "dm") button.classList.add("active");
      button.innerHTML = `<span class="dm-avatar">${avatarInnerHtml(dm.otherUserAvatar, dm.otherUserName)}</span><span class="dm-info"><span class="dm-name">${escapeHtml(dm.otherUserName || "ユーザー")}</span><span class="dm-last-message">${escapeHtml(dm.lastMessage || "新しいDM")}</span></span>`;
      button.addEventListener("click", () => openDM(dm.id));
      dmList.appendChild(button);
    }
  }

  function openDMsModal() {
    dmModal?.classList.remove("hidden");
    notifications = notifications.filter(n => n.type !== "dm");
    renderNotifications();
  }

  function closeDMsModal() {
    dmModal?.classList.add("hidden");
  }

  openDMsButton?.addEventListener("click", openDMsModal);
  closeDMsButton?.addEventListener("click", closeDMsModal);
  dmModal?.addEventListener("click", (event) => {
    if (event.target === dmModal) closeDMsModal();
  });

  // ==================================================
  // 通知パネル
  // ==================================================

  function addNotification(type, text, onClick) {

    const notification = {
      id: `notif-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      text,
      time: new Date(),
      onClick: onClick || null
    };

    notifications.unshift(notification);

    if (notifications.length > 30) {
      notifications = notifications.slice(0, 30);
    }

    renderNotifications();

  }

  function renderNotifications() {

    if (notificationsList) {

      notificationsList.innerHTML = "";

      for (const notification of notifications) {

        const item = document.createElement("button");
        item.type = "button";
        item.className = "notification-item";

        item.innerHTML = `
          <span class="notification-icon">${notification.type === "friend" ? "👥" : "💬"}</span>
          <span class="notification-body">
            <span class="notification-text">${escapeHtml(notification.text)}</span>
            <span class="notification-time">${formatTime(notification.time)}</span>
          </span>
        `;

        item.addEventListener("click", () => {

          notifications = notifications.filter(n => n.id !== notification.id);
          renderNotifications();

          if (notification.onClick) {
            notification.onClick();
          }

          notificationsPanel?.classList.add("hidden");

        });

        notificationsList.appendChild(item);

      }

    }

    notificationsEmpty?.classList.toggle("hidden", notifications.length > 0);

    if (notificationsBadge) {

      if (notifications.length > 0) {
        notificationsBadge.textContent = String(notifications.length);
        notificationsBadge.classList.remove("hidden");
      } else {
        notificationsBadge.classList.add("hidden");
      }

    }

    if (dmNotifBadge) {

      const dmCount = notifications.filter(n => n.type === "dm").length;

      if (dmCount > 0) {
        dmNotifBadge.textContent = String(dmCount);
        dmNotifBadge.classList.remove("hidden");
      } else {
        dmNotifBadge.classList.add("hidden");
      }

    }

  }

  notificationsButton?.addEventListener("click", () => {
    notificationsPanel?.classList.toggle("hidden");
  });

  clearNotificationsButton?.addEventListener("click", () => {
    notifications = [];
    renderNotifications();
  });

  document.addEventListener("click", (event) => {

    if (
      notificationsPanel &&
      !notificationsPanel.classList.contains("hidden") &&
      !notificationsPanel.contains(event.target) &&
      event.target !== notificationsButton &&
      !notificationsButton?.contains(event.target)
    ) {
      notificationsPanel.classList.add("hidden");
    }

  });

  // ==================================================
  // Friends
  // ==================================================

  function openFriendsModal() {
    friendsModal?.classList.remove("hidden");
    loadFriends();
  }

  function closeFriendsModal() {
    friendsModal?.classList.add("hidden");
  }

  function switchFriendsTab(tab) {

    friendsTabs.forEach(button => {
      button.classList.toggle("active", button.dataset.tab === tab);
    });

    friendsPanelFriends?.classList.toggle("hidden", tab !== "friends");
    friendsPanelIncoming?.classList.toggle("hidden", tab !== "incoming");
    friendsPanelOutgoing?.classList.toggle("hidden", tab !== "outgoing");

  }

  friendsTabs.forEach(button => {
    button.addEventListener("click", () => switchFriendsTab(button.dataset.tab));
  });

  async function sendFriendRequest(userId) {
    const data = await api("/api/friends/request", {
      method: "POST",
      body: JSON.stringify({ userId })
    });
    loadFriends();
    return data;
  }

  async function acceptFriendRequest(id) {
    await api(`/api/friends/${id}/accept`, { method: "POST" });
    loadFriends();
  }

  async function removeFriendRequest(id) {
    await api(`/api/friends/${id}`, { method: "DELETE" });
    loadFriends();
  }

  function renderFriendRow(container, item, options) {

    const row = document.createElement("div");
    row.className = "user-search-row";

    const info = document.createElement("div");
    info.className = "user-search-result";
    info.style.cursor = "default";
    info.innerHTML = `<span class="user-search-avatar">${avatarInnerHtml(item.avatar, item.name)}</span><span class="user-search-name">${escapeHtml(item.name)}</span>`;

    row.appendChild(info);

    for (const action of options) {

      const button = document.createElement("button");
      button.type = "button";
      button.className = action.className || "friend-quick-button";
      button.textContent = action.label;
      button.addEventListener("click", async () => {
        button.disabled = true;
        try {
          await action.onClick();
        } catch (error) {
          alert(error.message || "処理できませんでした。");
          button.disabled = false;
        }
      });

      row.appendChild(button);

    }

    container.appendChild(row);

  }

  async function loadFriends() {

    try {

      const data = await api("/api/friends");

      const friends = Array.isArray(data?.friends) ? data.friends : [];
      const incoming = Array.isArray(data?.incoming) ? data.incoming : [];
      const outgoing = Array.isArray(data?.outgoing) ? data.outgoing : [];

      if (friendsList) {
        friendsList.innerHTML = "";
        for (const item of friends) {
          renderFriendRow(friendsList, item, [
            { label: "DM", onClick: () => { closeFriendsModal(); startDM(item.userId); } },
            { label: "削除", className: "friend-quick-button danger", onClick: () => removeFriendRequest(item.id) }
          ]);
        }
      }
      friendsListEmpty?.classList.toggle("hidden", friends.length > 0);

      if (incomingRequestsList) {
        incomingRequestsList.innerHTML = "";
        for (const item of incoming) {
          renderFriendRow(incomingRequestsList, item, [
            { label: "承認", onClick: () => acceptFriendRequest(item.id) },
            { label: "拒否", className: "friend-quick-button danger", onClick: () => removeFriendRequest(item.id) }
          ]);
        }
      }
      incomingRequestsEmpty?.classList.toggle("hidden", incoming.length > 0);

      if (outgoingRequestsList) {
        outgoingRequestsList.innerHTML = "";
        for (const item of outgoing) {
          renderFriendRow(outgoingRequestsList, item, [
            { label: "取り消す", className: "friend-quick-button danger", onClick: () => removeFriendRequest(item.id) }
          ]);
        }
      }
      outgoingRequestsEmpty?.classList.toggle("hidden", outgoing.length > 0);

      if (friendRequestBadge) {
        if (incoming.length > 0) {
          friendRequestBadge.textContent = String(incoming.length);
          friendRequestBadge.classList.remove("hidden");
        } else {
          friendRequestBadge.classList.add("hidden");
        }
      }

    } catch (error) {
      console.error("loadFriends error:", error);
    }

  }

  openFriendsButton?.addEventListener("click", openFriendsModal);
  closeFriendsButton?.addEventListener("click", closeFriendsModal);
  friendsModal?.addEventListener("click", (event) => {
    if (event.target === friendsModal) closeFriendsModal();
  });

  userSearchButton?.addEventListener("click", openUserSearchModal);
  closeUserSearchButton?.addEventListener("click", closeUserSearchModal);
  userSearchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); searchUsers(); }
  });
  userSearchModal?.addEventListener("click", (event) => {
    if (event.target === userSearchModal) closeUserSearchModal();
  });

  // ==================================================
  // Create Modal
  // ==================================================

  function openCreateModal() {

    if (!createModal) {
      return;
    }

    createModal.classList.remove(
      "hidden"
    );

    if (roomNameInput) {

      roomNameInput.value =
        "";

      setTimeout(
        () => {

          roomNameInput.focus();

        },
        50
      );

    }

  }

  function closeCreateModal() {

    createModal?.classList.add(
      "hidden"
    );

  }

  createRoomButton?.addEventListener(
    "click",
    openCreateModal
  );

  cancelCreateButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        closeCreateModal
      );

    }
  );

  confirmCreateButton?.addEventListener(
    "click",
    () => {

      const name =
        String(
          roomNameInput?.value ||
          ""
        ).trim();

      if (!name) {

        alert(
          "部屋の名前を入力してください。"
        );

        roomNameInput?.focus();

        return;

      }

      if (name.length > 100) {

        alert(
          "部屋の名前は100文字以内にしてください。"
        );

        return;

      }

      if (
        !socket ||
        !socket.connected
      ) {

        alert(
          "サーバーに接続されていません。"
        );

        return;

      }

      confirmCreateButton.disabled =
        true;

      socket.emit(
        "create room",
        {
          name
        }
      );

      setTimeout(
        () => {

          if (
            confirmCreateButton
          ) {

            confirmCreateButton.disabled =
              false;

          }

        },
        1500
      );

    }
  );

  roomNameInput?.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key ===
        "Enter"
      ) {

        event.preventDefault();

        confirmCreateButton?.click();

      }

    }
  );

  // ==================================================
  // Join Modal
  // ==================================================

  function openJoinModal() {

    if (!joinModal) {
      return;
    }

    joinModal.classList.remove(
      "hidden"
    );

    const description =
      document.getElementById("joinModalDescription");

    if (description) {
      description.textContent = "招待コードを入力してください。";
    }

    if (joinError) {

      joinError.textContent =
        "";

    }

    if (inviteCodeInput) {

      inviteCodeInput.value =
        "";

      setTimeout(
        () => {

          inviteCodeInput.focus();

        },
        50
      );

    }

  }

  function closeJoinModal() {

    joinModal?.classList.add(
      "hidden"
    );

  }

  joinRoomButton?.addEventListener(
    "click",
    openJoinModal
  );

  cancelJoinButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        closeJoinModal
      );

    }
  );

  confirmJoinButton?.addEventListener(
    "click",
    () => {

      const code =
        String(
          inviteCodeInput?.value ||
          ""
        )
          .trim()
          .toUpperCase();

      if (!code) {

        if (joinError) {

          joinError.textContent =
            "招待コードを入力してください。";

        }

        inviteCodeInput?.focus();

        return;

      }

      if (
        !socket ||
        !socket.connected
      ) {

        if (joinError) {

          joinError.textContent =
            "サーバーに接続されていません。";

        }

        return;

      }

      if (joinError) {

        joinError.textContent =
          "";

      }

      confirmJoinButton.disabled =
        true;

      socket.emit(
        "join room",
        {
          code
        }
      );

      setTimeout(
        () => {

          if (
            confirmJoinButton
          ) {

            confirmJoinButton.disabled =
              false;

          }

        },
        1500
      );

    }
  );

  inviteCodeInput?.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key ===
        "Enter"
      ) {

        event.preventDefault();

        confirmJoinButton?.click();

      }

    }
  );

  // ==================================================
  // Invite Code
  // ==================================================

  inviteCode?.addEventListener(
    "click",
    async () => {

      const code =
        currentRoom?.inviteCode;

      if (!code) {
        return;
      }

      try {

        await navigator.clipboard.writeText(
          code
        );

        const original =
          inviteCode.textContent;

        inviteCode.textContent =
          "コピーしました！";

        setTimeout(
          () => {

            if (inviteCode) {

              inviteCode.textContent =
                original;

            }

          },
          1200
        );

      } catch (error) {

        console.error(
          "clipboard error:",
          error
        );

      }

    }
  );

  inviteLinkButton?.addEventListener(
    "click",
    async () => {

      const name =
        currentRoom?.name ||
        currentRoomId;

      if (!name) {
        return;
      }

      const url =
        `${window.location.origin}/${encodeURIComponent(name)}`;

      try {

        await navigator.clipboard.writeText(url);

        const original =
          inviteLinkButton.textContent;

        inviteLinkButton.textContent =
          "コピーしました！";

        setTimeout(
          () => {

            if (inviteLinkButton) {

              inviteLinkButton.textContent =
                original;

            }

          },
          1200
        );

      } catch (error) {

        console.error(
          "clipboard error:",
          error
        );

      }

    }
  );

  // ==================================================
  // Messages
  // ==================================================

  function clearMessages() {

    if (messages) {

      messages.innerHTML =
        "";

    }

    lastMessageAuthorId = null;
    lastMessageTime = null;

  }

  function renderMessages(
    list
  ) {

    if (!messages) {
      return;
    }

    isLoadingMessages =
      true;

    clearMessages();

    for (
      const message of list
    ) {

      if (
        String(message.room) !==
        String(currentRoomId)
      ) {

        continue;

      }

      appendMessage(
        message,
        false
      );

    }

    isLoadingMessages =
      false;

    requestAnimationFrame(
      () => {

        scrollToBottom(
          false
        );

      }
    );

  }

  // ==================================================
  // Append Message
  // ==================================================

  function appendMessage(
    message,
    scroll = true
  ) {

    if (!messages || !message) {
      return;
    }

    if (
      String(message.room) !==
      String(currentRoomId)
    ) {

      return;

    }

    const wrapper =
      document.createElement(
        "div"
      );

    wrapper.className =
      "message";

    wrapper.dataset.messageId =
      String(message.id);

    // ----------------------------------------------
    // 自分 / 他人
    // ----------------------------------------------

    const isOwn =
      currentUser &&
      Number(message.userId) ===
      Number(currentUser.id);

    if (isOwn) {

      wrapper.classList.add(
        "own"
      );

    } else {

      wrapper.classList.add(
        "other"
      );

    }

    // ----------------------------------------------
    // 連続投稿のグループ化（Discordと同様、
    // 同じ人が続けて短時間に投稿した場合は
    // アイコン・名前を省略する）
    // ----------------------------------------------

    const messageTime =
      message.createdAt
        ? new Date(message.createdAt).getTime()
        : Date.now();

    const hasReply =
      message.replyToId !== null &&
      message.replyToId !== undefined &&
      String(message.replyToId) !== "";

    const isGrouped =
      !hasReply &&
      lastMessageAuthorId !== null &&
      String(lastMessageAuthorId) === String(message.userId) &&
      lastMessageTime !== null &&
      Math.abs(messageTime - lastMessageTime) < 5 * 60 * 1000;

    if (isGrouped) {
      wrapper.classList.add("grouped");
    }

    lastMessageAuthorId = message.userId;
    lastMessageTime = messageTime;

    // ----------------------------------------------
    // Avatar
    // ----------------------------------------------

    const username =
      message.username ||
      "Unknown";

    const avatarLetter =
      username
        .trim()
        .charAt(0)
        .toUpperCase() ||
      "U";

    // ----------------------------------------------
    // Reply Card
    // ----------------------------------------------

    const replyHtml =
      hasReply
        ? `
          <button
            type="button"
            class="message-reply-card"
            data-action="reply-jump"
            title="返信元のコメントを見る"
          >

            <span class="reply-card-bar"></span>

            <span class="reply-card-inner">

              <span class="reply-card-label">
                ↩ 返信
              </span>

              <span class="reply-card-user">
                ${escapeHtml(
                  message.replyToUsername ||
                  "ユーザー"
                )}
              </span>

              <span class="reply-card-text">
                ${escapeHtml(
                  message.replyToText ||
                  "元のメッセージ"
                )}
              </span>

            </span>

            <span class="reply-card-arrow">
              ›
            </span>

          </button>
        `
        : "";

    // ----------------------------------------------
    // Header（Discordと同様、自分のコメントも含め常に表示。
    // ただし連続投稿の場合は省略する）
    // ----------------------------------------------

    const headerHtml =
      isGrouped
        ? ""
        : `
      <div class="message-header">

        <span
          class="message-username"
          data-action="view-profile"
          data-user-id="${escapeHtml(String(message.userId))}"
          tabindex="0"
          role="button"
        >
          ${escapeHtml(
            username
          )}
        </span>

        <span class="message-time">
          ${formatTime(
            message.createdAt
          )}
        </span>

        ${
          message.edited
            ? `
              <span class="message-edited">
                編集済み
              </span>
            `
            : ""
        }

      </div>
    `;

    // ----------------------------------------------
    // Actions
    // ----------------------------------------------

    const actionsHtml = message.isDm
      ? (
        !isOwn
          ? `
            <div class="message-actions">
              <button type="button" class="message-report-button" data-action="report-message" title="このメッセージを通報">🚩</button>
            </div>
          `
          : ""
      )
      : `
        <div class="message-actions">
          <button type="button" class="message-reply-button" data-action="reply" title="このコメントに返信">↩ 返信</button>
          ${
            isOwn
              ? `
                <button type="button" class="message-edit-button" data-action="edit">編集</button>
                <button type="button" class="message-delete-button" data-action="delete">削除</button>
              `
              : `
                <button type="button" class="message-report-button" data-action="report-message" title="このメッセージを通報">🚩</button>
              `
          }
        </div>
      `;

    // ----------------------------------------------
    // HTML
    // ----------------------------------------------

    wrapper.innerHTML = `

      <div
        class="message-avatar"
        data-action="view-profile"
        data-user-id="${escapeHtml(String(message.userId))}"
        tabindex="0"
        role="button"
      >
        ${
          isGrouped
            ? `<span class="message-hover-time">${formatTime(message.createdAt)}</span>`
            : avatarInnerHtml(
                message.avatar,
                username
              )
        }
      </div>

      <div class="message-body">

        ${headerHtml}

        <div class="message-bubble">

          ${replyHtml}

          ${
            message.text
              ? `
                <div class="message-text">
                  ${linkifyHtml(message.text)}
                  ${
                    isGrouped && message.edited
                      ? `<span class="message-edited">（編集済み）</span>`
                      : ""
                  }
                </div>
              `
              : ""
          }

          ${
            message.image
              ? `
                <img
                  src="${escapeHtml(message.image)}"
                  class="message-image"
                  alt="添付画像"
                  data-action="open-image"
                >
              `
              : ""
          }

        </div>

        <div class="message-reactions" data-message-id="${escapeHtml(String(message.id))}">
          ${buildReactionsHtml(message)}
          <button type="button" class="reaction-add-button" data-action="add-reaction" title="リアクションを追加">😊+</button>
        </div>

        ${actionsHtml}

      </div>
    `;

    // ----------------------------------------------
    // Reply
    // ----------------------------------------------

    wrapper
      .querySelector(
        '[data-action="open-image"]'
      )
      ?.addEventListener(
        "click",
        (event) => {
          window.open(event.target.src, "_blank");
        }
      );

    wrapper
      .querySelectorAll(
        '[data-action="view-profile"]'
      )
      .forEach(el => {

        el.addEventListener("click", () => {
          openUserProfile(Number(el.dataset.userId), username, message.avatar);
        });

        el.addEventListener("keydown", (event) => {

          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openUserProfile(Number(el.dataset.userId), username, message.avatar);
          }

        });

      });

    wrapper
      .querySelectorAll('[data-action="toggle-reaction"]')
      .forEach(el => {

        el.addEventListener("click", () => {
          toggleReaction(message.id, el.dataset.emoji);
        });

      });

    wrapper
      .querySelector('[data-action="add-reaction"]')
      ?.addEventListener("click", (event) => {
        event.stopPropagation();
        openReactionPicker(event.currentTarget, message.id);
      });

    wrapper
      .querySelector(
        '[data-action="reply"]'
      )
      ?.addEventListener(
        "click",
        () => {

          setReply(
            message
          );

        }
      );

    // ----------------------------------------------
    // Reply Jump
    // ----------------------------------------------

    wrapper
      .querySelector(
        '[data-action="reply-jump"]'
      )
      ?.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

          event.stopPropagation();

          jumpToMessage(
            message.replyToId
          );

        }
      );

    // ----------------------------------------------
    // Edit
    // ----------------------------------------------

    wrapper
      .querySelector(
        '[data-action="edit"]'
      )
      ?.addEventListener(
        "click",
        () => {

          editMessage(
            message
          );

        }
      );

    // ----------------------------------------------
    // Report
    // ----------------------------------------------

    wrapper
      .querySelector('[data-action="report-message"]')
      ?.addEventListener("click", () => {

        openReportModal({
          targetUserId: message.userId,
          targetMessageId: message.id,
          targetMessageText: message.text || ""
        });

      });


    // ----------------------------------------------
    // Delete
    // ----------------------------------------------

    wrapper
      .querySelector(
        '[data-action="delete"]'
      )
      ?.addEventListener(
        "click",
        () => {

          deleteMessage(
            message
          );

        }
      );

    // ----------------------------------------------
    // Append
    // ----------------------------------------------

    messages.appendChild(
      wrapper
    );

    // ----------------------------------------------
    // Animation
    // ----------------------------------------------

    requestAnimationFrame(
      () => {

        wrapper.classList.add(
          "message-visible"
        );

      }
    );

    // ----------------------------------------------
    // Scroll
    // ----------------------------------------------

    if (scroll) {

      requestAnimationFrame(
        () => {

          scrollToBottom(
            true
          );

        }
      );

    }

  }

  // ==================================================
  // Jump to Reply Target
  // ==================================================

  function jumpToMessage(
    messageId
  ) {

    if (
      !messages ||
      messageId === null ||
      messageId === undefined
    ) {

      return;

    }

    const target =
      messages.querySelector(
        `[data-message-id="${CSS.escape(
          String(messageId)
        )}"]`
      );

    if (!target) {

      return;

    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    target.classList.remove(
      "message-highlight"
    );

    // CSS animation再発火
    void target.offsetWidth;

    target.classList.add(
      "message-highlight"
    );

    setTimeout(
      () => {

        target.classList.remove(
          "message-highlight"
        );

      },
      1000
    );

  }

  // ==================================================
  // Update Message
  // ==================================================

  function updateMessageElement(
    message
  ) {

    if (!messages || !message) {
      return;
    }

    const element =
      messages.querySelector(
        `[data-message-id="${CSS.escape(
          String(message.id)
        )}"]`
      );

    if (!element) {
      return;
    }

    const textElement =
      element.querySelector(
        ".message-text"
      );

    if (textElement) {

      textElement.textContent =
        message.text;

    }

    let editedElement =
      element.querySelector(
        ".message-edited"
      );

    if (
      message.edited &&
      !editedElement
    ) {

      editedElement =
        document.createElement(
          "span"
        );

      editedElement.className =
        "message-edited";

      editedElement.textContent =
        "編集済み";

      element
        .querySelector(
          ".message-header, .message-meta"
        )
        ?.appendChild(
          editedElement
        );

    }

  }

  // ==================================================
  // Reply
  // ==================================================

  function setReply(
    message
  ) {

    if (!message) {
      return;
    }

    replyToMessage =
      message;

    if (!replyPreview) {
      return;
    }

    replyPreview.classList.remove(
      "hidden"
    );

    replyPreview.innerHTML = `

      <span class="reply-preview-line"></span>

      <div class="reply-preview-content">

        <div class="reply-preview-label">
          ↩ 返信
        </div>

        <div class="reply-preview-title">
          ${escapeHtml(
            message.username ||
            "ユーザー"
          )}
        </div>

        <div class="reply-preview-text">
          ${escapeHtml(
            message.text ||
            ""
          )}
        </div>

      </div>

      <button
        type="button"
        class="reply-preview-close"
        id="cancelReplyButton"
        title="返信をキャンセル"
      >
        ×
      </button>
    `;

    document
      .getElementById(
        "cancelReplyButton"
      )
      ?.addEventListener(
        "click",
        clearReply
      );

    messageInput?.focus();

  }

  function clearReply() {

    replyToMessage =
      null;

    replyPreview?.classList.add(
      "hidden"
    );

    if (replyPreview) {

      replyPreview.innerHTML =
        "";

    }

  }

  // ==================================================
  // Send Message
  // ==================================================

  let lastTypingEmit = 0;

  messageInput?.addEventListener("input", () => {

    if (!socket || !socket.connected) return;
    if (currentChatType === "dm") return;

    const now = Date.now();

    if (now - lastTypingEmit > 2000) {
      lastTypingEmit = now;
      socket.emit("typing", { room: currentRoomId });
    }

  });

  // ==================================================
  // 入力欄の自動リサイズ（テキストエリア化）
  // ==================================================

  function autoResizeMessageInput() {

    if (!messageInput) return;

    messageInput.style.height = "auto";

    const maxHeight = 160;

    messageInput.style.height =
      `${Math.min(messageInput.scrollHeight, maxHeight)}px`;

  }

  messageInput?.addEventListener("input", autoResizeMessageInput);

  // Enterで改行、Ctrl+Enter（Macは⌘+Enter）で送信
  messageInput?.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      messageForm?.requestSubmit();
    }

  });

  messageForm?.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const text =
        String(
          messageInput?.value ||
          ""
        ).trim();

      if (!text && !pendingImageDataUrl) {
        return;
      }

      if (text.length > 5000) {

        alert(
          "メッセージが長すぎます。"
        );

        return;

      }

      if (
        !socket ||
        !socket.connected
      ) {

        alert(
          "サーバーに接続されていません。"
        );

        return;

      }

      const image = pendingImageDataUrl || undefined;

      if (currentChatType === "dm") {
        socket.emit("dm message", {
          conversationId: currentRoomId,
          text,
          image
        });
      } else {
        socket.emit(
          "chat message",
          {
            room: currentRoomId,
            text,
            image,
            replyToId: replyToMessage ? replyToMessage.id : null
          }
        );
      }

      messageInput.value =
        "";

      autoResizeMessageInput();

      pendingImageDataUrl = null;
      imageAttachPreview?.classList.add("hidden");
      if (imageAttachPreviewImg) imageAttachPreviewImg.src = "";

      clearReply();

    }
  );

  // ==================================================
  // Edit Message
  // ==================================================

  function editMessage(
    message
  ) {

    if (!message) {
      return;
    }

    const newText =
      window.prompt(
        "メッセージを編集",
        message.text || ""
      );

    if (
      newText === null
    ) {

      return;

    }

    const text =
      newText.trim();

    if (!text) {

      alert(
        "メッセージを空にはできません。"
      );

      return;

    }

    if (text.length > 5000) {

      alert(
        "メッセージが長すぎます。"
      );

      return;

    }

    if (
      !socket ||
      !socket.connected
    ) {

      return;

    }

    socket.emit(
      "edit message",
      {
        id:
          message.id,

        text
      }
    );

  }

  // ==================================================
  // Delete Message
  // ==================================================

  function deleteMessage(
    message
  ) {

    if (!message) {
      return;
    }

    const confirmed =
      window.confirm(
        "このメッセージを削除しますか？"
      );

    if (!confirmed) {
      return;
    }

    if (
      !socket ||
      !socket.connected
    ) {

      return;

    }

    socket.emit(
      "delete message",
      {
        id:
          message.id
      }
    );

  }

  // ==================================================
  // Scroll
  // ==================================================

  scrollTopButton?.addEventListener(
    "click",
    () => {

      messages?.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

  scrollBottomButton?.addEventListener(
    "click",
    () => {

      scrollToBottom(
        true
      );

    }
  );

  newMessageButton?.addEventListener(
    "click",
    () => {

      scrollToBottom(
        true
      );

      newMessageButton.classList.add(
        "hidden"
      );

    }
  );

  messages?.addEventListener(
    "scroll",
    () => {

      if (
        isNearBottom()
      ) {

        newMessageButton?.classList.add(
          "hidden"
        );

      }

    }
  );

  // ==================================================
  // Settings
  // ==================================================

  function openSettings() {

    settingsModal?.classList.remove(
      "hidden"
    );

    loadSettings();

  }

  function closeSettings() {

    settingsModal?.classList.add(
      "hidden"
    );

  }

  settingsButton?.addEventListener(
    "click",
    openSettings
  );

  closeSettingsButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        closeSettings
      );

    }
  );

  // ==================================================
  // View Profile Modal（Discordのユーザーカードのように、
  // アイコン/名前クリックで自己紹介を表示）
  // ==================================================

  function setViewProfilePreview(avatarUrl, name) {

    const letter =
      (name || "U")
        .trim()
        .charAt(0)
        .toUpperCase() || "U";

    if (viewProfileAvatarFallback) {
      viewProfileAvatarFallback.textContent = letter;
    }

    if (viewProfileAvatarImage) {

      if (avatarUrl) {

        viewProfileAvatarImage.src = avatarUrl;
        viewProfileAvatarImage.classList.remove("hidden");
        viewProfileAvatarFallback?.classList.add("hidden");

      } else {

        viewProfileAvatarImage.src = "";
        viewProfileAvatarImage.classList.add("hidden");
        viewProfileAvatarFallback?.classList.remove("hidden");

      }

    }

  }

  function closeViewProfileModal() {
    viewProfileModal?.classList.add("hidden");
  }

  async function openUserProfile(userId, fallbackName, fallbackAvatar) {

    if (!userId || !viewProfileModal) {
      return;
    }

    // 自分自身の場合は編集モーダルを直接開く
    if (
      currentUser &&
      Number(userId) === Number(currentUser.id)
    ) {

      openProfileModal();

      return;

    }

    if (viewProfileName) viewProfileName.textContent = fallbackName || "ユーザー";
    if (viewProfileBio) viewProfileBio.textContent = "";

    setViewProfilePreview(fallbackAvatar || null, fallbackName);

    editOwnProfileButton?.classList.add("hidden");
    viewProfileFriendButton?.classList.add("hidden");
    if (viewProfileFriendMessage) viewProfileFriendMessage.textContent = "";

    viewedProfileUserId = Number(userId);

    viewProfileQuestionButton?.classList.remove("hidden");
    viewProfileReportButton?.classList.remove("hidden");
    viewProfileQABoard?.classList.add("hidden");
    if (viewProfileQAList) viewProfileQAList.innerHTML = "";

    viewProfileModal.classList.remove("hidden");

    try {

      const data = await api(`/api/users/${userId}`);

      if (data?.user) {

        if (viewProfileName) viewProfileName.textContent = data.user.name || "ユーザー";

        if (viewProfileBio) {
          viewProfileBio.textContent =
            data.user.bio && data.user.bio.trim()
              ? data.user.bio
              : "自己紹介はまだありません。";
        }

        setViewProfilePreview(data.user.avatar || null, data.user.name);

        renderFriendButton(data.user.friendStatus, data.user.friendRequestId);

      }

    } catch (error) {

      if (viewProfileBio) {
        viewProfileBio.textContent = "プロフィールを取得できませんでした。";
      }

    }

    loadPublicQABoard(viewedProfileUserId);

  }

  async function loadPublicQABoard(userId) {

    try {

      const data = await api(`/api/questions/answered/${userId}`);
      const list = Array.isArray(data?.questions) ? data.questions : [];

      if (list.length === 0 || !viewProfileQAList || !viewProfileQABoard) {
        return;
      }

      viewProfileQABoard.classList.remove("hidden");

      viewProfileQAList.innerHTML = list.map(item => `
        <div class="qa-item">
          <div class="qa-question">💌 ${escapeHtml(item.question)}</div>
          <div class="qa-answer">↳ ${escapeHtml(item.answer)}</div>
        </div>
      `).join("");

    } catch (error) {
      console.error("loadPublicQABoard error:", error);
    }

  }

  function renderFriendButton(status, requestId) {

    if (!viewProfileFriendButton) return;

    viewProfileFriendButton.classList.remove("hidden");
    viewProfileFriendButton.disabled = false;
    viewProfileFriendButton.className = "secondary-button";

    if (status === "friends") {

      viewProfileFriendButton.textContent = "フレンドを解除";
      viewProfileFriendButton.classList.add("danger");
      viewProfileFriendButton.onclick = async () => {
        viewProfileFriendButton.disabled = true;
        try {
          await removeFriendRequest(requestId);
          renderFriendButton("none", null);
        } catch (error) {
          if (viewProfileFriendMessage) viewProfileFriendMessage.textContent = error.message || "処理できませんでした。";
          viewProfileFriendButton.disabled = false;
        }
      };

    } else if (status === "outgoing") {

      viewProfileFriendButton.textContent = "申請を取り消す";
      viewProfileFriendButton.onclick = async () => {
        viewProfileFriendButton.disabled = true;
        try {
          await removeFriendRequest(requestId);
          renderFriendButton("none", null);
        } catch (error) {
          if (viewProfileFriendMessage) viewProfileFriendMessage.textContent = error.message || "処理できませんでした。";
          viewProfileFriendButton.disabled = false;
        }
      };

    } else if (status === "incoming") {

      viewProfileFriendButton.textContent = "フレンド申請を承認";
      viewProfileFriendButton.onclick = async () => {
        viewProfileFriendButton.disabled = true;
        try {
          await acceptFriendRequest(requestId);
          renderFriendButton("friends", requestId);
        } catch (error) {
          if (viewProfileFriendMessage) viewProfileFriendMessage.textContent = error.message || "処理できませんでした。";
          viewProfileFriendButton.disabled = false;
        }
      };

    } else {

      viewProfileFriendButton.textContent = "＋ フレンド申請を送る";
      viewProfileFriendButton.onclick = async () => {
        viewProfileFriendButton.disabled = true;
        try {
          const data = await sendFriendRequest(viewedProfileUserId);
          renderFriendButton(data?.status === "accepted" ? "friends" : "outgoing", null);
        } catch (error) {
          if (viewProfileFriendMessage) viewProfileFriendMessage.textContent = error.message || "フレンド申請を送れませんでした。";
          viewProfileFriendButton.disabled = false;
        }
      };

    }

  }

  closeViewProfileButton?.addEventListener("click", closeViewProfileModal);

  viewProfileModal?.addEventListener("click", (event) => {

    if (event.target === viewProfileModal) {
      closeViewProfileModal();
    }

  });

  // ==================================================
  // 質問箱：質問を送る
  // ==================================================

  function openAskQuestionModal() {
    if (!askQuestionModal) return;
    if (questionInput) questionInput.value = "";
    if (askQuestionMessage) askQuestionMessage.textContent = "";
    askQuestionModal.classList.remove("hidden");
  }

  function closeAskQuestionModal() {
    askQuestionModal?.classList.add("hidden");
  }

  viewProfileQuestionButton?.addEventListener("click", () => {
    closeViewProfileModal();
    openAskQuestionModal();
  });

  closeAskQuestionButton?.addEventListener("click", closeAskQuestionModal);

  askQuestionModal?.addEventListener("click", (event) => {
    if (event.target === askQuestionModal) closeAskQuestionModal();
  });

  sendQuestionButton?.addEventListener("click", async () => {

    const question = String(questionInput?.value || "").trim();

    if (!question) {
      if (askQuestionMessage) askQuestionMessage.textContent = "質問を入力してください。";
      return;
    }

    try {

      await api("/api/questions", {
        method: "POST",
        body: JSON.stringify({ toUserId: viewedProfileUserId, question })
      });

      if (askQuestionMessage) askQuestionMessage.textContent = "送信しました！";

      setTimeout(closeAskQuestionModal, 700);

    } catch (error) {
      if (askQuestionMessage) askQuestionMessage.textContent = error.message || "送信できませんでした。";
    }

  });

  // ==================================================
  // 質問箱：受信トレイ
  // ==================================================

  function openQuestionInboxModal() {
    questionInboxModal?.classList.remove("hidden");
    loadQuestionInbox();
  }

  function closeQuestionInboxModal() {
    questionInboxModal?.classList.add("hidden");
  }

  closeQuestionInboxButton?.addEventListener("click", closeQuestionInboxModal);

  questionInboxModal?.addEventListener("click", (event) => {
    if (event.target === questionInboxModal) closeQuestionInboxModal();
  });

  async function loadQuestionInbox() {

    try {

      const data = await api("/api/questions/inbox");
      const list = Array.isArray(data?.questions) ? data.questions : [];

      questionInboxEmpty?.classList.toggle("hidden", list.length > 0);

      if (!questionInboxList) return;

      questionInboxList.innerHTML = "";

      for (const item of list) {

        const row = document.createElement("div");
        row.className = "qa-inbox-item";

        if (item.answer) {

          row.innerHTML = `
            <div class="qa-question">💌 ${escapeHtml(item.question)}</div>
            <div class="qa-answer">↳ ${escapeHtml(item.answer)}</div>
          `;

        } else {

          row.innerHTML = `
            <div class="qa-question">💌 ${escapeHtml(item.question)}</div>
            <textarea class="qa-answer-input" placeholder="回答を書く..." maxlength="500"></textarea>
            <div class="qa-inbox-actions">
              <button type="button" class="secondary-button qa-skip-button">削除</button>
              <button type="button" class="primary-button qa-answer-button">回答する</button>
            </div>
          `;

          const textarea = row.querySelector(".qa-answer-input");

          row.querySelector(".qa-answer-button")?.addEventListener("click", async () => {

            const answer = String(textarea?.value || "").trim();

            if (!answer) return;

            try {
              await api(`/api/questions/${item.id}/answer`, {
                method: "POST",
                body: JSON.stringify({ answer })
              });
              loadQuestionInbox();
            } catch (error) {
              alert(error.message || "回答できませんでした。");
            }

          });

          row.querySelector(".qa-skip-button")?.addEventListener("click", async () => {

            try {
              await api(`/api/questions/${item.id}`, { method: "DELETE" });
              loadQuestionInbox();
            } catch (error) {
              alert(error.message || "削除できませんでした。");
            }

          });

        }

        questionInboxList.appendChild(row);

      }

    } catch (error) {
      console.error("loadQuestionInbox error:", error);
    }

  }

  // ==================================================
  // 通報
  // ==================================================

  function openReportModal(target) {

    pendingReportTarget = target;

    if (reportModal) {
      if (reportReasonSelect) reportReasonSelect.value = "spam";
      if (reportDetailInput) reportDetailInput.value = "";
      if (reportMessage) reportMessage.textContent = "";
      reportModal.classList.remove("hidden");
    }

  }

  function closeReportModal() {
    reportModal?.classList.add("hidden");
    pendingReportTarget = null;
  }

  viewProfileReportButton?.addEventListener("click", () => {
    openReportModal({ targetUserId: viewedProfileUserId });
  });

  closeReportButton?.addEventListener("click", closeReportModal);

  reportModal?.addEventListener("click", (event) => {
    if (event.target === reportModal) closeReportModal();
  });

  submitReportButton?.addEventListener("click", async () => {

    if (!pendingReportTarget) return;

    const reason = reportReasonSelect?.value || "other";
    const detail = String(reportDetailInput?.value || "").trim();

    try {

      await api("/api/reports", {
        method: "POST",
        body: JSON.stringify({ ...pendingReportTarget, reason, detail })
      });

      if (reportMessage) reportMessage.textContent = "通報を受け付けました。ご協力ありがとうございます。";

      setTimeout(closeReportModal, 900);

    } catch (error) {
      if (reportMessage) reportMessage.textContent = error.message || "送信できませんでした。";
    }

  });

  openQuestionInboxButton?.addEventListener("click", () => {
    closeSettings();
    openQuestionInboxModal();
  });

  // ==================================================
  // 管理者パネル
  // ==================================================

  function openAdminPanel() {
    adminPanelModal?.classList.remove("hidden");
    switchAdminTab("reports");
    loadAdminReports();
  }

  function closeAdminPanel() {
    adminPanelModal?.classList.add("hidden");
  }

  openAdminPanelButton?.addEventListener("click", () => {
    closeSettings();
    openAdminPanel();
  });

  closeAdminPanelButton?.addEventListener("click", closeAdminPanel);

  adminPanelModal?.addEventListener("click", (event) => {
    if (event.target === adminPanelModal) closeAdminPanel();
  });

  function switchAdminTab(tab) {

    document.querySelectorAll("[data-admin-tab]").forEach(button => {
      button.classList.toggle("active", button.dataset.adminTab === tab);
    });

    adminPanelReports?.classList.toggle("hidden", tab !== "reports");
    adminPanelUsers?.classList.toggle("hidden", tab !== "users");

  }

  document.querySelectorAll("[data-admin-tab]").forEach(button => {
    button.addEventListener("click", () => switchAdminTab(button.dataset.adminTab));
  });

  async function loadAdminReports() {

    try {

      const data = await api("/api/admin/reports");
      const list = Array.isArray(data?.reports) ? data.reports : [];

      adminReportsEmpty?.classList.toggle("hidden", list.length > 0);

      if (!adminReportsList) return;

      adminReportsList.innerHTML = "";

      const reasonLabels = {
        spam: "スパム・宣伝",
        harassment: "嫌がらせ・誹謗中傷",
        inappropriate: "不適切なコンテンツ",
        impersonation: "なりすまし",
        other: "その他"
      };

      for (const report of list) {

        const item = document.createElement("div");
        item.className = "admin-report-item";

        item.innerHTML = `
          <div class="admin-report-header">
            <span class="admin-report-reason">${escapeHtml(reasonLabels[report.reason] || report.reason)}</span>
            <span class="admin-report-time">${formatTime(report.createdAt)}</span>
          </div>
          ${report.targetUserName ? `<div class="admin-report-line">対象ユーザー: ${escapeHtml(report.targetUserName)}</div>` : ""}
          ${report.targetMessageText ? `<div class="admin-report-line">メッセージ: 「${escapeHtml(report.targetMessageText)}」</div>` : ""}
          ${report.detail ? `<div class="admin-report-line">詳細: ${escapeHtml(report.detail)}</div>` : ""}
          <div class="admin-report-line admin-report-reporter">報告者: ${escapeHtml(report.reporterName)}</div>
          <button type="button" class="secondary-button admin-resolve-button">対応済みにする</button>
        `;

        item.querySelector(".admin-resolve-button")?.addEventListener("click", async () => {
          try {
            await api(`/api/admin/reports/${report.id}/resolve`, { method: "POST" });
            loadAdminReports();
          } catch (error) {
            alert(error.message || "処理できませんでした。");
          }
        });

        adminReportsList.appendChild(item);

      }

    } catch (error) {
      console.error("loadAdminReports error:", error);
    }

  }

  let adminUserSearchTimeout = null;

  adminUserSearchInput?.addEventListener("input", () => {

    clearTimeout(adminUserSearchTimeout);

    adminUserSearchTimeout = setTimeout(async () => {

      const q = adminUserSearchInput.value.trim();

      if (!q) {
        if (adminUsersList) adminUsersList.innerHTML = "";
        return;
      }

      try {

        const data = await api(`/api/admin/users/search?q=${encodeURIComponent(q)}`);
        const list = Array.isArray(data?.users) ? data.users : [];

        if (!adminUsersList) return;

        adminUsersList.innerHTML = "";

        for (const item of list) {

          const row = document.createElement("div");
          row.className = "admin-user-item";

          row.innerHTML = `
            <span class="user-search-avatar">${avatarInnerHtml(item.avatar, item.name)}</span>
            <span class="admin-user-name">${escapeHtml(item.name)}${item.isAdmin ? " 🛡️" : ""}</span>
            <button type="button" class="secondary-button admin-toggle-admin-button">${item.isAdmin ? "管理者を解除" : "管理者にする"}</button>
            <button type="button" class="secondary-button danger admin-delete-user-button">削除</button>
          `;

          row.querySelector(".admin-toggle-admin-button")?.addEventListener("click", async () => {

            const makeAdmin = !item.isAdmin;

            const confirmText =
              makeAdmin
                ? `「${item.name}」を管理者にしますか？`
                : `「${item.name}」の管理者権限を解除しますか？`;

            if (!confirm(confirmText)) return;

            try {
              await api(`/api/admin/users/${item.id}/set-admin`, {
                method: "POST",
                body: JSON.stringify({ isAdmin: makeAdmin })
              });
              item.isAdmin = makeAdmin;
              row.querySelector(".admin-user-name").textContent = item.name + (makeAdmin ? " 🛡️" : "");
              row.querySelector(".admin-toggle-admin-button").textContent = makeAdmin ? "管理者を解除" : "管理者にする";
            } catch (error) {
              alert(error.message || "処理できませんでした。");
            }

          });

          row.querySelector(".admin-delete-user-button")?.addEventListener("click", async () => {

            if (!confirm(`「${item.name}」を削除しますか？この操作は取り消せません。`)) return;

            try {
              await api(`/api/admin/users/${item.id}`, { method: "DELETE" });
              row.remove();
            } catch (error) {
              alert(error.message || "削除できませんでした。");
            }

          });

          adminUsersList.appendChild(row);

        }

      } catch (error) {
        console.error("admin user search error:", error);
      }

    }, 300);

  });

  editOwnProfileButton?.addEventListener("click", () => {
    closeViewProfileModal();
    openProfileModal();
  });

  // ==================================================
  // Profile Modal（アイコン・自己紹介）
  // ==================================================

  function openProfileModal() {

    if (!profileModal || !currentUser) {
      return;
    }

    pendingAvatarDataUrl = undefined;

    if (profileNameInput) {
      profileNameInput.value = currentUser.name || "";
    }

    if (profileBioInput) {
      profileBioInput.value = currentUser.bio || "";
    }

    if (profileMessage) {
      profileMessage.textContent = "";
    }

    setProfilePreview(currentUser.avatar || null, currentUser.name);

    profileModal.classList.remove("hidden");

  }

  function closeProfileModal() {
    profileModal?.classList.add("hidden");
  }

  function setProfilePreview(avatarUrl, name) {

    const letter =
      (name || "U")
        .trim()
        .charAt(0)
        .toUpperCase() || "U";

    if (profileAvatarFallback) {
      profileAvatarFallback.textContent = letter;
    }

    if (profileAvatarImage) {

      if (avatarUrl) {

        profileAvatarImage.src = avatarUrl;
        profileAvatarImage.classList.remove("hidden");

        if (profileAvatarFallback) {
          profileAvatarFallback.classList.add("hidden");
        }

        removeAvatarButton?.classList.remove("hidden");

      } else {

        profileAvatarImage.src = "";
        profileAvatarImage.classList.add("hidden");

        if (profileAvatarFallback) {
          profileAvatarFallback.classList.remove("hidden");
        }

        removeAvatarButton?.classList.add("hidden");

      }

    }

  }

  function resizeImageFile(file, options = {}) {

    const maxSize = options.maxSize || 256;
    const quality = options.quality || 0.85;

    return new Promise((resolve, reject) => {

      const reader = new FileReader();

      reader.onerror = () => reject(new Error("画像を読み込めませんでした。"));

      reader.onload = () => {

        const img = new Image();

        img.onerror = () => reject(new Error("画像を読み込めませんでした。"));

        img.onload = () => {

          let { width, height } = img;

          if (width > height) {

            if (width > maxSize) {
              height = Math.round(height * (maxSize / width));
              width = maxSize;
            }

          } else {

            if (height > maxSize) {
              width = Math.round(width * (maxSize / height));
              height = maxSize;
            }

          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          resolve(canvas.toDataURL("image/jpeg", quality));

        };

        img.src = reader.result;

      };

      reader.readAsDataURL(file);

    });

  }

  profileAvatarButton?.addEventListener("click", () => {
    profileAvatarInput?.click();
  });

  // ==================================================
  // チャット画像添付
  // ==================================================

  imageAttachButton?.addEventListener("click", () => {
    imageAttachInput?.click();
  });

  imageAttachInput?.addEventListener("change", async () => {

    const file = imageAttachInput.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("画像ファイルを選んでください。");
      imageAttachInput.value = "";
      return;
    }

    try {

      const dataUrl = await resizeImageFile(file, { maxSize: 1000, quality: 0.75 });

      pendingImageDataUrl = dataUrl;

      if (imageAttachPreviewImg) imageAttachPreviewImg.src = dataUrl;
      imageAttachPreview?.classList.remove("hidden");

    } catch (error) {

      alert(error.message || "画像を処理できませんでした。");

    } finally {

      imageAttachInput.value = "";

    }

  });

  removeImageAttachButton?.addEventListener("click", () => {

    pendingImageDataUrl = null;
    imageAttachPreview?.classList.add("hidden");
    if (imageAttachPreviewImg) imageAttachPreviewImg.src = "";

  });

  profileAvatarInput?.addEventListener("change", async () => {

    const file = profileAvatarInput.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      if (profileMessage) profileMessage.textContent = "画像ファイルを選んでください。";
      return;
    }

    try {

      const dataUrl = await resizeImageFile(file);
      pendingAvatarDataUrl = dataUrl;
      setProfilePreview(dataUrl, profileNameInput?.value || currentUser?.name);

      if (profileMessage) profileMessage.textContent = "";

    } catch (error) {

      if (profileMessage) profileMessage.textContent = error.message || "画像を処理できませんでした。";

    } finally {

      profileAvatarInput.value = "";

    }

  });

  removeAvatarButton?.addEventListener("click", () => {

    pendingAvatarDataUrl = null;
    setProfilePreview(null, profileNameInput?.value || currentUser?.name);

  });

  saveProfileButton?.addEventListener("click", async () => {

    const name = String(profileNameInput?.value || "").trim();
    const bio = String(profileBioInput?.value || "");

    if (!name) {
      if (profileMessage) profileMessage.textContent = "名前を入力してください。";
      return;
    }

    const payload = { name, bio };

    if (pendingAvatarDataUrl !== undefined) {
      payload.avatar = pendingAvatarDataUrl;
    }

    try {

      if (profileMessage) profileMessage.textContent = "保存しています…";

      const data = await api("/api/profile", {
        method: "PUT",
        body: JSON.stringify(payload)
      });

      if (data?.user) {
        currentUser = data.user;
        updateUserUI();
      }

      pendingAvatarDataUrl = undefined;

      if (profileMessage) profileMessage.textContent = "保存しました。";

      setTimeout(closeProfileModal, 400);

    } catch (error) {

      if (profileMessage) profileMessage.textContent = error.message || "保存できませんでした。";

    }

  });

  usernameInput?.addEventListener("click", openProfileModal);

  usernameInput?.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProfileModal();
    }

  });

  userAvatarWrapper?.addEventListener("click", openProfileModal);

  closeProfileButton?.addEventListener("click", closeProfileModal);

  profileModal?.addEventListener("click", (event) => {

    if (event.target === profileModal) {
      closeProfileModal();
    }

  });

  function loadSettings() {

    const theme = getStoredTheme();

    setActiveTheme(theme);

    const language =
      localStorage.getItem(
        "veylo-language"
      ) || "ja";

    if (languageSelect) {

      languageSelect.value =
        language;

    }

    applyLanguage(language);

    const soundEnabled =
      localStorage.getItem("veylo-notification-sound") === "true";

    if (notificationSoundToggleButton) {
      notificationSoundToggleButton.textContent = soundEnabled ? "ON" : "OFF";
    }

    const desktopEnabled =
      localStorage.getItem("veylo-desktop-notifications") === "true";

    if (desktopNotificationToggleButton) {
      desktopNotificationToggleButton.textContent = desktopEnabled ? "ON" : "OFF";
    }

  }

  function applyTheme(
    enabled
  ) {

    document.body.classList.toggle(
      "dark-mode",
      Boolean(enabled)
    );

  }

  function applyGrayMode(
    enabled
  ) {

    document.body.classList.toggle(
      "gray-mode",
      Boolean(enabled)
    );

  }

  // ==================================================
  // 多言語対応（UIの主要な文言のみ）
  // ==================================================

  const TRANSLATIONS = {
    ja: {
      tagline: "気軽につながるチャット",
      login_title: "ログイン",
      username_label: "ユーザー名",
      password_label: "パスワード",
      login_button: "ログイン",
      forgot_password: "パスワードを忘れた方",
      show_register: "新規登録",
      register_title: "新規登録",
      email_label: "メールアドレス",
      register_button: "登録する",
      back_to_login: "ログインに戻る",
      send_reset_email: "リセットメールを送信",
      rooms_section: "ルーム",
      casual: "雑談",
      create_room: "部屋を作成",
      join_room: "部屋に参加",
      friends: "フレンド",
      direct_messages: "ダイレクトメッセージ",
      notifications: "通知",
      settings: "設定",
      theme: "テーマ",
      theme_desc: "画面の配色を選べます",
      theme_light: "☀️ ライト",
      theme_dark: "🌙 ダーク",
      theme_gray: "◑ グレー",
      language: "言語",
      notification_sound: "通知音",
      notification_sound_desc: "新しいメッセージが届いたときに音を鳴らします",
      desktop_notification: "デスクトップ通知",
      desktop_notification_desc: "他のタブを見ているときに通知を表示します",
      change_password: "パスワード変更",
      current_password: "現在のパスワード",
      new_password: "新しいパスワード（8文字以上）",
      change_password_button: "パスワードを変更",
      delete_account: "アカウント削除",
      delete_account_desc: "アカウントとすべてのメッセージ・部屋・DMが完全に削除されます。この操作は取り消せません。",
      confirm_password: "確認のためパスワードを入力",
      delete_account_button: "アカウントを削除する",
      logout: "ログアウト",
      close: "閉じる",
      save: "保存",

      message_placeholder: "メッセージを入力...",
      members_title: "メンバー",
      online_label: "オンライン",
      offline_label: "オフライン",
      add_channel: "チャンネルを作成",
      new_dm: "新しいDMを始める",
      no_dms: "まだDMはありません",
      search_users: "ユーザーを検索",
      clear_all: "すべて既読",
      no_notifications: "通知はありません",

      friends_tab_friends: "フレンド",
      friends_tab_incoming: "受信リクエスト",
      friends_tab_outgoing: "送信済み",
      no_friends: "まだフレンドがいません",
      no_incoming: "届いているリクエストはありません",
      no_outgoing: "送信中のリクエストはありません",

      send_question: "質問を送る",
      ask_question_title: "質問を送る",
      ask_question_desc: "この質問は匿名で届きます。相手が回答すると公開されます。",
      question_placeholder: "聞きたいことを書いてください",
      send: "送信する",
      question_inbox_title: "質問箱に届いた質問",
      no_questions: "まだ質問は届いていません",
      qa_board_title: "質問箱",
      answer_placeholder: "回答を書く...",
      answer_button: "回答する",

      report_button: "通報",
      report_title: "通報する",
      report_reason_label: "理由",
      report_reason_spam: "スパム・宣伝",
      report_reason_harassment: "嫌がらせ・誹謗中傷",
      report_reason_inappropriate: "不適切なコンテンツ",
      report_reason_impersonation: "なりすまし",
      report_reason_other: "その他",
      report_detail_label: "詳細（任意）",
      report_detail_placeholder: "詳しい状況があれば教えてください",
      submit_report: "通報を送信"
    },
    en: {
      tagline: "A casual place to chat",
      login_title: "Log In",
      username_label: "Username",
      password_label: "Password",
      login_button: "Log In",
      forgot_password: "Forgot password?",
      show_register: "Sign Up",
      register_title: "Sign Up",
      email_label: "Email address",
      register_button: "Sign Up",
      back_to_login: "Back to login",
      send_reset_email: "Send reset email",
      rooms_section: "Rooms",
      casual: "Casual",
      create_room: "Create Room",
      join_room: "Join Room",
      friends: "Friends",
      direct_messages: "Direct Messages",
      notifications: "Notifications",
      settings: "Settings",
      theme: "Theme",
      theme_desc: "Choose the app's color scheme",
      theme_light: "☀️ Light",
      theme_dark: "🌙 Dark",
      theme_gray: "◑ Gray",
      language: "Language",
      notification_sound: "Notification sound",
      notification_sound_desc: "Play a sound when a new message arrives",
      desktop_notification: "Desktop notifications",
      desktop_notification_desc: "Show a notification when you're on another tab",
      change_password: "Change Password",
      current_password: "Current password",
      new_password: "New password (8+ characters)",
      change_password_button: "Change Password",
      delete_account: "Delete Account",
      delete_account_desc: "Your account and all messages, rooms, and DMs will be permanently deleted. This cannot be undone.",
      confirm_password: "Enter your password to confirm",
      delete_account_button: "Delete Account",
      logout: "Log Out",
      close: "Close",
      save: "Save",

      message_placeholder: "Type a message...",
      members_title: "Members",
      online_label: "Online",
      offline_label: "Offline",
      add_channel: "Create Channel",
      new_dm: "Start a new DM",
      no_dms: "No DMs yet",
      search_users: "Search Users",
      clear_all: "Mark all as read",
      no_notifications: "No notifications",

      friends_tab_friends: "Friends",
      friends_tab_incoming: "Incoming Requests",
      friends_tab_outgoing: "Sent Requests",
      no_friends: "No friends yet",
      no_incoming: "No incoming requests",
      no_outgoing: "No sent requests",

      send_question: "Send a Question",
      ask_question_title: "Send a Question",
      ask_question_desc: "This question will be sent anonymously. It becomes public once answered.",
      question_placeholder: "Write what you'd like to ask",
      send: "Send",
      question_inbox_title: "Questions You've Received",
      no_questions: "No questions yet",
      qa_board_title: "Q&A Box",
      answer_placeholder: "Write an answer...",
      answer_button: "Answer",

      report_button: "Report",
      report_title: "Report",
      report_reason_label: "Reason",
      report_reason_spam: "Spam / Advertising",
      report_reason_harassment: "Harassment / Abuse",
      report_reason_inappropriate: "Inappropriate Content",
      report_reason_impersonation: "Impersonation",
      report_reason_other: "Other",
      report_detail_label: "Details (optional)",
      report_detail_placeholder: "Share more details if you can",
      submit_report: "Submit Report"
    }
  };

  function applyLanguage(lang) {

    const dict =
      TRANSLATIONS[lang] || TRANSLATIONS.ja;

    document.querySelectorAll("[data-i18n]").forEach(el => {

      const key = el.dataset.i18n;

      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {

      const key = el.dataset.i18nPlaceholder;

      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }

    });

    document.querySelectorAll("[data-i18n-title]").forEach(el => {

      const key = el.dataset.i18nTitle;

      if (dict[key] !== undefined) {
        el.setAttribute("title", dict[key]);
      }

    });

    document.documentElement.lang = lang === "en" ? "en" : "ja";

  }

  function t(key) {

    const lang =
      localStorage.getItem("veylo-language") || "ja";

    const dict =
      TRANSLATIONS[lang] || TRANSLATIONS.ja;

    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.ja[key] || key);

  }

  function getStoredTheme() {

    const stored =
      localStorage.getItem("veylo-theme");

    if (stored === "light" || stored === "dark" || stored === "gray") {
      return stored;
    }

    // 旧バージョン（ダーク/グレー個別トグル）からの移行
    if (localStorage.getItem("veylo-dark-mode") === "true") {
      return "dark";
    }

    if (localStorage.getItem("veylo-gray-mode") === "true") {
      return "gray";
    }

    return "light";

  }

  function setActiveTheme(theme) {

    localStorage.setItem("veylo-theme", theme);

    applyTheme(theme === "dark");
    applyGrayMode(theme === "gray");

    themeSelector
      ?.querySelectorAll(".theme-option")
      .forEach(button => {
        button.classList.toggle(
          "active",
          button.dataset.theme === theme
        );
      });

  }

  themeSelector
    ?.querySelectorAll(".theme-option")
    .forEach(button => {

      button.addEventListener("click", () => {
        setActiveTheme(button.dataset.theme);
      });

    });

  // ==================================================
  // 通知音 / デスクトップ通知
  // ==================================================

  function playNotificationSound() {

    try {

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = 880;

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.35);

      oscillator.onended = () => ctx.close();

    } catch (error) {

      console.error("notification sound error:", error);

    }

  }

  function showDesktopNotification(title, body) {

    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted") return;

    try {

      const notification = new Notification(title, {
        body: body || "",
        icon: "/favicon.ico"
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

    } catch (error) {

      console.error("desktop notification error:", error);

    }

  }

  function notifyIncomingMessage(message) {

    if (!message || !currentUser) return;
    if (Number(message.userId) === Number(currentUser.id)) return;

    const isBackground =
      document.hidden || !document.hasFocus();

    if (!isBackground) return;

    if (localStorage.getItem("veylo-notification-sound") === "true") {
      playNotificationSound();
    }

    if (localStorage.getItem("veylo-desktop-notifications") === "true") {
      showDesktopNotification(
        message.username || "コンネついーと",
        message.text || "新しいメッセージ"
      );
    }

  }

  notificationSoundToggleButton?.addEventListener("click", () => {

    const enabled =
      !(localStorage.getItem("veylo-notification-sound") === "true");

    localStorage.setItem("veylo-notification-sound", String(enabled));

    notificationSoundToggleButton.textContent = enabled ? "ON" : "OFF";

    if (enabled) {
      playNotificationSound();
    }

  });

  desktopNotificationToggleButton?.addEventListener("click", async () => {

    const enabling =
      !(localStorage.getItem("veylo-desktop-notifications") === "true");

    if (enabling) {

      if (!("Notification" in window)) {
        alert("お使いのブラウザはデスクトップ通知に対応していません。");
        return;
      }

      const permission = await Notification.requestPermission();

      if (permission !== "granted") {
        alert("通知が許可されませんでした。ブラウザの設定をご確認ください。");
        return;
      }

    }

    localStorage.setItem("veylo-desktop-notifications", String(enabling));

    desktopNotificationToggleButton.textContent = enabling ? "ON" : "OFF";

  });

  // ==================================================
  // パスワード変更
  // ==================================================

  changePasswordButton?.addEventListener("click", async () => {

    const currentPassword = String(currentPasswordInput?.value || "");
    const newPassword = String(newPasswordInput?.value || "");

    if (!currentPassword || !newPassword) {
      if (passwordChangeMessage) passwordChangeMessage.textContent = "すべての項目を入力してください。";
      return;
    }

    if (newPassword.length < 8) {
      if (passwordChangeMessage) passwordChangeMessage.textContent = "新しいパスワードは8文字以上で入力してください。";
      return;
    }

    try {

      if (passwordChangeMessage) passwordChangeMessage.textContent = "変更しています…";

      await api("/api/password", {
        method: "PUT",
        body: JSON.stringify({ currentPassword, newPassword })
      });

      if (passwordChangeMessage) passwordChangeMessage.textContent = "パスワードを変更しました。";

      if (currentPasswordInput) currentPasswordInput.value = "";
      if (newPasswordInput) newPasswordInput.value = "";

    } catch (error) {

      if (passwordChangeMessage) passwordChangeMessage.textContent = error.message || "変更できませんでした。";

    }

  });

  // ==================================================
  // アカウント削除
  // ==================================================

  deleteAccountButton?.addEventListener("click", async () => {

    if (deleteAccountPasswordInput?.classList.contains("hidden")) {

      deleteAccountPasswordInput.classList.remove("hidden");
      deleteAccountPasswordInput.focus();

      if (deleteAccountMessage) {
        deleteAccountMessage.textContent = "確認のためパスワードを入力し、もう一度クリックしてください。";
      }

      return;

    }

    const password = String(deleteAccountPasswordInput?.value || "");

    if (!password) {
      if (deleteAccountMessage) deleteAccountMessage.textContent = "パスワードを入力してください。";
      return;
    }

    const confirmed = window.confirm(
      "本当にアカウントを削除しますか？この操作は取り消せません。"
    );

    if (!confirmed) return;

    try {

      if (deleteAccountMessage) deleteAccountMessage.textContent = "削除しています…";

      await api("/api/account", {
        method: "DELETE",
        body: JSON.stringify({ password })
      });

      if (socket) socket.disconnect();

      window.location.reload();

    } catch (error) {

      if (deleteAccountMessage) deleteAccountMessage.textContent = error.message || "削除できませんでした。";

    }

  });

  languageSelect?.addEventListener("change", () => {

    localStorage.setItem(
      "veylo-language",
      languageSelect.value
    );

    applyLanguage(languageSelect.value);

  });

  saveSettingsButton?.addEventListener(
    "click",
    () => {

      if (languageSelect) {

        localStorage.setItem(
          "veylo-language",
          languageSelect.value
        );

      }

      closeSettings();

    }
  );

  // ==================================================
  // Logout
  // ==================================================

  logoutButton?.addEventListener(
    "click",
    async () => {

      const confirmed =
        window.confirm(
          "ログアウトしますか？"
        );

      if (!confirmed) {
        return;
      }

      try {

        await api(
          "/api/logout",
          {
            method: "POST"
          }
        );

        if (socket) {

          socket.disconnect();

        }

        currentUser =
          null;

        myRooms =
          [];

        dmListData = [];
        renderDMList();

        currentChatType = "room";

        currentRoomId =
          "casual";

        currentRoom = {
          id: "casual",
          name: "雑談",
          inviteCode: null,
          ownerId: null
        };

        clearReply();

        clearMessages();

        showScreen(
          "auth"
        );

        showAuthPanel(
          loginPanel
        );

        closeSettings();

      } catch (error) {

        alert(
          error.message ||
          "ログアウトに失敗しました。"
        );

      }

    }
  );

  // ==================================================
  // Login
  // ==================================================

  loginForm?.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      if (loginError) {

        loginError.textContent =
          "";

      }

      const name =
        String(
          document.getElementById(
            "loginName"
          )?.value ||
          ""
        ).trim();

      const password =
        String(
          document.getElementById(
            "loginPassword"
          )?.value ||
          ""
        );

      try {

        const data =
          await api(
            "/api/login",
            {
              method: "POST",

              body:
                JSON.stringify({
                  name,
                  password
                })
            }
          );

        currentUser =
          data.user;

        updateUserUI();

        showScreen(
          "app"
        );

        connectSocket();

      } catch (error) {

        if (loginError) {

          loginError.textContent =
            error.message ||
            "ログインに失敗しました。";

        }

      }

    }
  );

  // ==================================================
  // Register
  // ==================================================

  registerForm?.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      if (registerError) {

        registerError.textContent =
          "";

      }

      const email =
        String(
          document.getElementById(
            "registerEmail"
          )?.value ||
          ""
        ).trim();

      const name =
        String(
          document.getElementById(
            "registerName"
          )?.value ||
          ""
        ).trim();

      const password =
        String(
          document.getElementById(
            "registerPassword"
          )?.value ||
          ""
        );

      try {

        const data =
          await api(
            "/api/register",
            {
              method: "POST",

              body:
                JSON.stringify({
                  email,
                  name,
                  password
                })
            }
          );

        currentUser =
          data.user;

        updateUserUI();

        showScreen(
          "app"
        );

        connectSocket();

      } catch (error) {

        if (registerError) {

          registerError.textContent =
            error.message ||
            "登録に失敗しました。";

        }

      }

    }
  );

  // ==================================================
  // Forgot Password
  // ==================================================

  forgotForm?.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      if (forgotMessage) {

        forgotMessage.textContent =
          "";

      }

      const email =
        String(
          document.getElementById(
            "forgotEmail"
          )?.value ||
          ""
        ).trim();

      try {

        const data =
          await api(
            "/api/forgot-password",
            {
              method: "POST",

              body:
                JSON.stringify({
                  email
                })
            }
          );

        if (forgotMessage) {

          forgotMessage.textContent =
            data.message ||
            "メールを送信しました。";

        }

      } catch (error) {

        if (forgotMessage) {

          forgotMessage.textContent =
            error.message ||
            "処理に失敗しました。";

        }

      }

    }
  );

  // ==================================================
  // Auth Navigation
  // ==================================================

  showRegisterButton?.addEventListener(
    "click",
    () => {

      showAuthPanel(
        registerPanel
      );

    }
  );

  showLoginButton?.addEventListener(
    "click",
    () => {

      showAuthPanel(
        loginPanel
      );

    }
  );

  forgotPasswordButton?.addEventListener(
    "click",
    () => {

      showAuthPanel(
        forgotPanel
      );

    }
  );

  backToLoginButton?.addEventListener(
    "click",
    () => {

      showAuthPanel(
        loginPanel
      );

    }
  );

  // ==================================================
  // Modal Outside Click
  // ==================================================

  createModal?.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        createModal
      ) {

        closeCreateModal();

      }

    }
  );

  joinModal?.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        joinModal
      ) {

        closeJoinModal();

      }

    }
  );

  settingsModal?.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        settingsModal
      ) {

        closeSettings();

      }

    }
  );

  // ==================================================
  // ESC
  // ==================================================

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }

      closeCreateModal();

      closeJoinModal();

      closeSettings();

      clearReply();

    }
  );

  // ==================================================
  // Initialize
  // ==================================================

  async function init() {

    console.log(
      "コンネついーと App initializing..."
    );

    loadSettings();

    const loggedIn =
      await loadCurrentUser();

    if (!loggedIn) {

      return;

    }

    connectSocket();

  }

  init();

});
